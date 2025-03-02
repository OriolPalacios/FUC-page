# FUC Website Project

## Overview

The FUC Website Project is an information portal for the Federación Universitaria del Cusco (FUC), the university student federation. The website provides:

* **News and Events**: Up-to-date information and announcements.
* **Documentation and Resources**: Access to various guides and materials.
* **Federation Members and Secretariats**: Detailed profiles and contact information.
* **Consultation/Complaint Submission**: A system for users to submit queries and feedback.
* **Historical Information**: An archive of the federation’s milestones and achievements.

## Technology Stack

This project is built with:

- **Astro** - The core framework providing server-side rendering, routing, and MPA architecture
- **React** - For interactive UI components with client-side hydration
- **Tailwind CSS** - For utility-first styling
- **NocoDB** - As a backend database for storing and managing content
- **Additional libraries:**
    - Swiper - For carousel components
    - Marked - For Markdown parsing
    - anime.js - For animations

## Folder Structure

```text
/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and other assets that are processed
│   ├── components/     # Reusable UI components (Astro and React)
│   │   ├── consultsComponents/    # Components for consultation page
│   │   ├── eventsComponents/      # Components for events section
│   │   ├── generalUtilities/      # Common UI utilities
│   │   ├── landingComponents/     # Components for landing page
│   │   ├── membersComponents/     # Components for members section
│   │   ├── newsComponents/        # Components for news section
│   │   ├── skeletons/             # Loading skeleton components
│   │   └── swiperUtilities/       # Components for Swiper carousel
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro pages (file-based routing)
│   ├── services/       # API services to interact with NocoDB
│   ├── styles/         # Global styles and CSS overrides
│   ├── customTypes/    # TypeScript type definitions
│   └── utils/          # Utility functions
├── .env.example        # Environment variables
├── astro.config.mjs    # Astro configuration
└── tailwind.config.mjs # Tailwind CSS configuration
```

## How to Contribute
#### 1. Clone the repository
```bash
git clone https://github.com/your-username/FUC-page.git
cd FUC-page
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Set up environment variables Create a .env file with the required environment variables:

```bash
BASE_URL_TABLES=your_nocodb_url
NOCODB_KEY_API=your_nocodb_api_key
NOTICIAS_V1_DEFAULT_VIEW=your_news_table_view
EVENTOS_V1_DEFAULT_VIEW=your_events_table_view
MIEMBROS_V1_DEFAULT_VIEW=your_members_table_view
GALERIA_V1_DEFAULT_VIEW=your_gallery_table_view
DOCUMENTOS_V1_DEFAULT_VIEW=your_documents_table_view
```

#### 4. Start the development server
```bash
npm run dev
```

#### 5. Make your changes
* Follow the existing code style and naming conventions
* Add proper types for TypeScript components
* Use Astro components for mostly static content
* Use React components with the client: directive for interactive elements

#### 6. Test your changes
```bash
npm run build
npm run preview
```

#### 7. Submit a pull request
* Create a new branch for your feature or bugfix
* Make your changes and commit them with clear, descriptive messages
* Push your branch and create a pull request against the main branch

## Deployment
This site is configured to deploy to Netlify using the Astro Netlify adapter