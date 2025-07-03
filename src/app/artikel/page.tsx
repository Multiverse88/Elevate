'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import useGSAPAnimations from '@/hooks/useGSAPAnimations';
import PaginationSlider from '@/components/PaginationSlider';

interface Article {
  paperId: string;
  title: string;
  authors: { name: string }[];
  url: string;
  abstract: string;
}

const ARTICLES_PER_PAGE = 6;

export default function ArtikelPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const { useStaggeredCards } = useGSAPAnimations();
  const { containerRef, cardsRef } = useStaggeredCards();

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const query = 'English education';
        const mailto = 'ainanihsan0@gmail.com'; // Ganti dengan emailmu yang valid
        const response = await fetch(`https://api.openalex.org/works?search=${encodeURIComponent(query)}&mailto=${encodeURIComponent(mailto)}&select=id,title,authorships,abstract_inverted_index,doi`);
        if (!response.ok) throw new Error('Failed to fetch articles');
        const data = await response.json();
        const articles = data.results.map((work: any) => {
          const authors = work.authorships.map((authorship: any) => ({
            name: authorship.author.display_name,
          }));
          // Reconstruct abstract from inverted index
          let abstract = '';
          if (work.abstract_inverted_index) {
            const keys = Object.keys(work.abstract_inverted_index).sort((a, b) => {
              const indexA = work.abstract_inverted_index[a][0];
              const indexB = work.abstract_inverted_index[b][0];
              return indexA - indexB;
            });
            abstract = keys.join(' ');
          }
          return {
            paperId: work.id,
            title: work.title,
            authors,
            url: work.doi ? `https://doi.org/${work.doi}` : work.id,
            abstract,
          };
        });
        setArticles(articles);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const startIndex = currentPage * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // Reset cardsRef when currentPage changes to re-trigger GSAP animation
  useEffect(() => {
    if (cardsRef.current) {
      cardsRef.current = [];
    }
  }, [currentPage, cardsRef]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-lg font-medium text-gray-700">Loading articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-lg font-medium text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Artikel Bahasa Inggris</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan informasi dan tips seputar penulisan akademik dalam Bahasa Inggris dari OpenAlex.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentArticles.length > 0 ? (
              currentArticles.map((article, index) => (
                <div ref={(el: HTMLDivElement | null) => { if (el) cardsRef.current[index] = el; }} key={article.paperId} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 leading-tight">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 font-medium">
                      {article.authors.map(author => author.name).join(', ')}
                    </p>
                    <p className="text-gray-700 text-base mb-4 line-clamp-4">
                      {article.abstract ? article.abstract : 'No abstract available.'}
                    </p>
                    <Link
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                    >
                      Baca Selengkapnya
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600 text-lg py-10">No articles found.</p>
            )}
          </motion.div>
        </AnimatePresence>

        {articles.length > ARTICLES_PER_PAGE && (
          <PaginationSlider
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        )}
      </div>
    </div>
  );
}
 