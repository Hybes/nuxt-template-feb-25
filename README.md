# Nuxt Template

A modern Nuxt.js template with a focus on developer experience and performance. This template includes a curated selection of modules and configurations to get you started quickly.

## Features

- 🎨 [TailwindCSS](https://tailwindcss.com/) for styling
- 🌙 Dark/Light mode support via [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/)
- 🔍 SEO optimization with [@nuxtjs/seo](https://nuxtseo.com/)
- 🎭 GSAP animations via [v-gsap-nuxt](https://www.npmjs.com/package/v-gsap-nuxt)
- 🛡️ API protection with [nuxt-api-shield](https://nuxt-api-shield.vercel.app/)
- 🎯 Icons support via [@nuxt/icon](https://nuxt.com/modules/icon)
- 📝 Font optimization with [@nuxt/fonts](https://nuxt.com/modules/fonts)
- 🔧 VueUse composition utilities via [@vueuse/nuxt](https://vueuse.org/)
- ✨ Code quality tools (ESLint, Prettier)

## Setup

Make sure to install dependencies using Bun:

```bash
bun install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

## Production

Build the application for production:

```bash
bun run build
```

Run the production build:

```bash
bun run start
```

## Configuration Highlights

### Color Mode

The template comes with a pre-configured dark/light mode:
- Default preference: dark
- Fallback theme: dark
- Storage: localStorage
- Storage key: theme-color-mode

### SEO Configuration

Basic SEO is configured with:
- Site name: Hybes Template
- Default meta description
- Theme color support for light/dark modes
- Twitter card configuration
- Favicon configuration

### API Protection

The template includes API Shield with:
- Memory-based storage
- Automatic cleanup every 15 minutes
- Built-in rate limiting and protection

### Development Tools

- ESLint with modern configuration
- Prettier for code formatting
- TailwindCSS for styling
- Nuxt DevTools enabled

## License

[MIT License](LICENSE)
