This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Next.js course on LMS
### 01
- terminal: => `npx create-next-app@latest`
- .gitignore: => `tools: .idea .vscode`
- terminal: => `npm i prettier eslint-config-prettier --dev`
- .prettierrc: => `візьми стандартні налаштування`
- .eslintrc.json: => `{"extends": ["next/core-web-vitals", "prettier"]}`

### 02
- layout.tsx: => `import './globals.css'`;
- `npm install -D tailwindcss postcss autoprefixer` & `npx tailwindcss init -p`
- tailwind.config.js: => `content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],`
- app/globals.css: => `@tailwind base; @tailwind components; @tailwind utilities;`

### 03
- `npm i clsx`

### 04 Server Components
- `<h1 className={'text-xl'}>Home page {new Date().toTimeString()}</h1>`
- `npm run dev` => при оновленні сторінки час змінюється
- `npm run build` => `npm run start` => при оновленні сторінки час НЕ змінюється, тому що отримуємо закешовану версію

### 04 Static and Dynamic Rendering
- Static Rendering:
- Dynamic Rendering has Dynamic functions:
- `cookies()` - дозволяє читати cookie із вихідного HTTP запиту 
- `headers()` - дозволяє читати заголовки із вихідного HTTP запиту 
- `useSearchParams()` - дозволяє зчитувати запиту з URL 
- `searchParams` - обєкт, що містить параметри пошуку з URL 
- Client Components:
