import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const ProfileContent = dynamic(() => import('./ProfileContent'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>
})

export const metadata: Metadata = {
  title: 'Tentang Kami - Profil Elevate Academia',
  description: 'Elevate Academia didampingi oleh tim profesional lulusan Bahasa dan Sastra Inggris yang berpengalaman dalam mendampingi penulisan dan publikasi karya ilmiah. Membantu mahasiswa, dosen, dan peneliti menyusun naskah akademik berkualitas.',
  keywords: [
    'profil elevate academia',
    'tim akademik profesional',
    'lulusan bahasa inggris',
    'bimbingan penulisan ilmiah',
    'pendampingan publikasi',
    'visi misi elevate',
    'tim berpengalaman'
  ],
  openGraph: {
    title: 'Tentang Kami - Profil Elevate Academia',
    description: 'Tim profesional berpengalaman dalam mendampingi penulisan dan publikasi karya ilmiah. Membantu mahasiswa, dosen, dan peneliti mencapai kesuksesan akademik.',
    url: 'https://elevateacademia.com/profile',
  },
}

export default function Profile() {
  return <ProfileContent />
} 