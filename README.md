# MovieDB Explorer 🎬

A modern, feature-rich movie discovery application built with Next.js 16, React 19, and Tailwind CSS. Explore thousands of movies, from timeless classics to the latest releases, powered by The Movie Database (TMDB) API.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- **🎥 Extensive Movie Library** - Browse thousands of movies across all genres
- **🔍 Smart Search** - Powerful search functionality to find exactly what you're looking for
- **⭐ Top Rated** - Discover critically acclaimed films loved by audiences worldwide
- **🔥 Popular Now** - Stay updated with trending movies
- **📅 Coming Soon** - Preview upcoming releases and plan your watchlist
- **📊 Detailed Information** - Access comprehensive details, ratings, cast, and reviews
- **📱 Responsive Design** - Beautiful UI that works seamlessly on all devices
- **🎨 Premium Design** - Modern glassmorphism effects and smooth animations

## 📄 Pages

- **Home** - Featured collections of popular, top-rated, and upcoming movies
- **Popular** - Browse all popular movies with pagination
- **Top Rated** - Explore the highest-rated films
- **Upcoming** - See what's coming to theaters soon
- **Search** - Find movies by title
- **Movie Details** - Comprehensive information about each movie
- **Contact** - Get in touch with us via contact form
- **About** - Learn more about MovieDB Explorer
- **Privacy Policy** - Our commitment to your privacy
- **Terms of Service** - Terms and conditions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- TMDB API key ([Get one here](https://www.themoviedb.org/settings/api))

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/moviedb-explorer.git
cd moviedb-explorer
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query)
- **API**: [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)

## 📁 Project Structure

```
moviedb-explorer/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── movie/             # Movie details pages
│   ├── popular/           # Popular movies page
│   ├── privacy/           # Privacy policy page
│   ├── search/            # Search results page
│   ├── terms/             # Terms of service page
│   ├── top-rated/         # Top rated movies page
│   ├── upcoming/          # Upcoming movies page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── movie/            # Movie-related components
│   ├── search/           # Search components
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions and configurations
│   ├── tmdb.ts          # TMDB API client
│   ├── query-provider.tsx # React Query provider
│   └── utils.ts         # Helper functions
├── types/               # TypeScript type definitions
└── public/              # Static assets
```

## 🎨 Design Features

- **Modern UI/UX** - Clean, intuitive interface with premium aesthetics
- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Smooth Animations** - Micro-interactions and transitions
- **Dark Theme** - Eye-friendly dark color scheme
- **Gradient Accents** - Beautiful blue-purple-pink gradients
- **Responsive Layout** - Mobile-first design approach

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📝 Environment Variables

| Variable                          | Description         | Required |
| --------------------------------- | ------------------- | -------- |
| `NEXT_PUBLIC_TMDB_API_KEY`        | Your TMDB API key   | Yes      |
| `NEXT_PUBLIC_TMDB_BASE_URL`       | TMDB API base URL   | Yes      |
| `NEXT_PUBLIC_TMDB_IMAGE_BASE_URL` | TMDB image base URL | Yes      |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📧 Contact

For questions or feedback, please visit our [Contact Page](http://localhost:3000/contact).

---

**Note**: This product uses the TMDB API but is not endorsed or certified by TMDB.
