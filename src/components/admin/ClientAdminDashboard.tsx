'use client'

import dynamic from 'next/dynamic'

const LoadingSpinner = () => (
    <div className="flex justify-center items-center p-10">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

const AdminDashboard = dynamic(() => import('./Dashboard'), {
    loading: () => <LoadingSpinner />,
    ssr: false
})

export default function ClientAdminDashboard() {
  return <AdminDashboard />
}
