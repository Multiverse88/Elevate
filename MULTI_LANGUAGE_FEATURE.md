# Fitur Multi-Bahasa - Elevate Academia

## Overview
Website Elevate Academia sekarang mendukung fitur multi-bahasa dengan kemampuan untuk beralih antara Bahasa Indonesia dan Bahasa Inggris secara real-time.

## Fitur yang Diimplementasikan

### 1. Language Context (`src/contexts/LanguageContext.tsx`)
- **Provider**: `LanguageProvider` - Menyediakan context untuk seluruh aplikasi
- **Hook**: `useLanguage()` - Hook untuk mengakses fungsi bahasa
- **State**: `language` - State untuk bahasa saat ini ('id' atau 'en')
- **Function**: `t(key)` - Function untuk menerjemahkan teks berdasarkan key

### 2. Tombol Toggle Bahasa di Navbar
- **Desktop**: Tombol dengan ikon bendera dan teks bahasa (🇮🇩 ID / 🇺🇸 EN)
- **Mobile**: Tombol lengkap dengan nama bahasa (🇮🇩 Indonesia / 🇺🇸 English)
- **Styling**: Gradient background dengan hover effects
- **Position**: Di sebelah kanan navbar, sebelum tombol konsultasi

### 3. Komponen yang Sudah Diupdate
Semua komponen utama sudah diupdate untuk mendukung multi-bahasa:

#### Navbar (`src/components/Navbar.tsx`)
- Menu navigasi (BERANDA, PROFILE, LAYANAN, ARTIKEL, KONTAK)
- Tombol "Konsultasi Gratis"
- Tombol toggle bahasa

#### HeroSection (`src/components/HeroSection.tsx`)
- Badge "Platform Akademik Terdepan"
- Judul utama dan subtitle
- Tombol "JELAJAHI LAYANAN"
- Statistik (Total Klien, Publikasi Berhasil)

#### ServicesSection (`src/components/ServicesSection.tsx`)
- Judul "Jelajahi Layanan Kami"
- Nama dan deskripsi layanan:
  - Bimbingan Penulisan Naskah
  - Pendampingan Publikasi Ilmiah
  - Event Organizer Workshop Akademik

#### CategoriesSection (`src/components/CategoriesSection.tsx`)
- Badge "Layanan Kami"
- Judul dan subtitle
- Kategori layanan:
  - Penulisan Skripsi
  - Publikasi Jurnal
  - Penulisan Artikel
  - Workshop Akademik
  - Konsultasi Penelitian
  - Mentoring Personal

#### AboutUsSection (`src/components/AboutUsSection.tsx`)
- Badge "Tentang Kami"
- Judul dan deskripsi
- Statistik (Klien Puas, Mentor Ahli, Publikasi, Tingkat Sukses)
- Misi perusahaan

#### CoachingSection (`src/components/CoachingSection.tsx`)
- Badge "Tentang Kami"
- Judul dan deskripsi
- Fitur-fitur:
  - Mentor Berpengalaman
  - Sertifikasi Profesional
  - Metode Kreatif
  - Konsultasi Fleksibel

#### ContactSection (`src/components/ContactSection.tsx`)
- Judul dan subtitle
- Form kontak dengan semua field:
  - Nama Lengkap
  - Email
  - Nomor Telepon
  - Jenis Layanan
  - Pesan
- Placeholder dan label form

#### Footer (`src/components/Footer.tsx`)
- Deskripsi perusahaan
- Quick Links
- Contact Info
- Newsletter section
- Copyright dan legal links

#### TrustedBy (`src/components/TrustedBy.tsx`)
- Badge "Dipercaya Oleh"
- Subtitle

## Cara Penggunaan

### 1. Menggunakan Language Context
```tsx
import { useLanguage } from '@/contexts/LanguageContext'

function MyComponent() {
  const { language, setLanguage, t } = useLanguage()
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <button onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}>
        Toggle Language
      </button>
    </div>
  )
}
```

### 2. Menambah Translation Key Baru
Tambahkan key baru di `src/contexts/LanguageContext.tsx`:

```tsx
const translations = {
  id: {
    'new.key': 'Teks dalam Bahasa Indonesia',
    // ... existing translations
  },
  en: {
    'new.key': 'Text in English',
    // ... existing translations
  }
}
```

### 3. Menggunakan Translation di Komponen
```tsx
const { t } = useLanguage()

// Di dalam JSX
<h1>{t('new.key')}</h1>
```

## Struktur Translation Keys

Translation keys diorganisir berdasarkan section:

- `nav.*` - Navigation items
- `hero.*` - Hero section
- `services.*` - Services section
- `categories.*` - Categories section
- `about.*` - About section
- `coaching.*` - Coaching section
- `contact.*` - Contact section
- `footer.*` - Footer section
- `trusted.*` - Trusted by section

## Fitur Teknis

### 1. Real-time Language Switching
- Perubahan bahasa terjadi secara instan tanpa reload halaman
- State disimpan dalam React Context
- Semua komponen otomatis update ketika bahasa berubah

### 2. Responsive Design
- Tombol toggle bahasa responsive untuk desktop dan mobile
- Layout menyesuaikan dengan ukuran layar

### 3. Accessibility
- Tombol toggle bahasa memiliki hover effects
- Ikon bendera untuk identifikasi visual yang jelas
- Keyboard navigation support

### 4. Performance
- Context optimization untuk mencegah re-render yang tidak perlu
- Translation keys di-cache dalam memory

## Deployment

Fitur multi-bahasa sudah siap untuk deployment ke Vercel atau platform hosting lainnya. Tidak ada konfigurasi tambahan yang diperlukan karena menggunakan client-side state management.

## Maintenance

### Menambah Bahasa Baru
1. Tambahkan bahasa baru di `LanguageContext.tsx`
2. Buat object translations untuk bahasa tersebut
3. Update type `Language` untuk include bahasa baru
4. Update UI untuk menampilkan opsi bahasa baru

### Update Translations
1. Edit file `src/contexts/LanguageContext.tsx`
2. Update key yang sesuai di object `translations`
3. Test perubahan di development server

## Testing

Untuk test fitur multi-bahasa:
1. Jalankan `npm run dev`
2. Buka browser dan akses website
3. Klik tombol toggle bahasa di navbar
4. Verifikasi semua teks berubah sesuai bahasa yang dipilih
5. Test di mobile view untuk memastikan responsive design

## Troubleshooting

### Issue: Teks tidak berubah
- Pastikan komponen menggunakan `useLanguage()` hook
- Periksa apakah key translation sudah benar
- Pastikan `LanguageProvider` sudah membungkus komponen

### Issue: Error TypeScript
- Pastikan semua refs sudah di-type dengan benar
- Periksa import statements
- Pastikan dependencies sudah terinstall

### Issue: Performance
- Pastikan tidak ada re-render yang tidak perlu
- Gunakan `useMemo` atau `useCallback` jika diperlukan
- Monitor React DevTools untuk performance issues 