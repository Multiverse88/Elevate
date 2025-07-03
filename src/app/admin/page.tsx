import ClientAdminDashboard from '@/components/admin/ClientAdminDashboard'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-brand-light-gray">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-brand-dark-navy font-kelvinch mb-2">
            Admin Dashboard
          </h1>
          <p className="text-brand-dark-navy opacity-70 font-barlow">
            Manage your content and website settings
          </p>
        </div>
        <ClientAdminDashboard />
      </div>
    </div>
  )
}