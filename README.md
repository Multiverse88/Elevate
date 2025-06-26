# Elevate Academia Website

Modern educational platform website with professional design and content management system.

## Features

- Modern responsive landing page
- Company profile section
- Services showcase
- Blog articles
- Content Management System (CMS)
- Contact information
- Professional design with custom typography
- Brand color scheme implementation

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Kelvinch & Barlow Condensed fonts

## System Requirements

- Node.js 18.0.0 or newer
- PostgreSQL 12 or newer
- npm or yarn

## Installation

1. Clone repository:
```bash
git clone https://github.com/yourusername/elevate-academia.git
cd elevate-academia
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create .env file and add required configuration:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/elevate_academia"
```

4. Run database migration:
```bash
npx prisma migrate dev
```

5. Start development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  ├── app/                 # App router pages
  ├── components/         # React components
  ├── lib/               # Utility functions
  └── styles/            # Global styles
public/
  └── images/            # Static images
    ├── categories/      # Category icons
    ├── hero/           # Hero section images
    ├── icons/          # UI icons
    ├── logos/          # Company logos
    └── team/           # Team photos
```

## Brand Colors

- Dark Navy: #142333
- Medium Blue: #145da0  
- Gold: #d6ad60
- Light Blue: #90adc6
- Cream: #f4ebd0
- Light Gray: #eff3f6

## Typography

- Headlines: Kelvinch font
- Sub-headlines: Barlow Condensed Bold
- Body text: Barlow Condensed

## Deployment

1. Build application:
```bash
npm run build
# or
yarn build
```

2. Start application:
```bash
npm start
# or
yarn start
```

## Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Create Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Elevate Academia - [elevateacademiaa@gmail.com](mailto:elevateacademiaa@gmail.com)

Website: [https://elevateacademia.id](https://elevateacademia.id) 