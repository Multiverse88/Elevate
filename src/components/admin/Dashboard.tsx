'use client'
import { useState } from 'react'
import ArticleForm from './ArticleForm'
import ServiceForm from './ServiceForm'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('articles')

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('articles')}
                className={`py-2 px-4 border-b-2 font-medium text-sm ${
                  activeTab === 'articles'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Manage Articles
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`py-2 px-4 border-b-2 font-medium text-sm ${
                  activeTab === 'services'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Manage Services
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'articles' && <ArticleForm />}
            {activeTab === 'services' && <ServiceForm />}
          </div>
        </div>
      </div>
    </div>
  )
} 