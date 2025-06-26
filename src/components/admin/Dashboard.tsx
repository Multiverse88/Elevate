import { useState } from 'react'
import ArticleForm from './ArticleForm'
import ServiceForm from './ServiceForm'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'articles' | 'services'>('articles')

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            className={`py-4 px-6 text-sm font-medium ${
              activeTab === 'articles'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('articles')}
          >
            Artikel
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium ${
              activeTab === 'services'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('services')}
          >
            Layanan
          </button>
        </nav>
      </div>

      <div className="p-6">
        {activeTab === 'articles' ? (
          <ArticleForm />
        ) : (
          <ServiceForm />
        )}
      </div>
    </div>
  )
} 