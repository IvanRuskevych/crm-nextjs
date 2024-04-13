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


### 05 import fonts

- layout.tsx: => `import { Plus_Jakarta_Sans } from 'next/font/google';`

### 06 Navigation
- import { usePathname, useRouter } from 'next/navigation';
- const router = useRouter();
- `router.push('/');` => додає новий запис у стеку історії браузера
- `router.replace('/');` => замінює поточний роут, та не додає новий запис у стек історії браузера
- const pathname = usePathname();
- `current={pathname === '/dashboard'}`

### 06 Error Handling
- dashboard/error.tsx: => файл для локального відлову помилок, лише для вкладених елементів
- app/global-error.tsx => файл для відлову помилок на глобальному рівні
- not-found.tsx =>
- error.tsx =>
- global-error.tsx =>

### 07 Parallel Routes
- @categories => @ перед назвою папки, page з цієї папки буде рендеритися на роуті предка, по типу "section"
- default.tsx => якщо виникне помилка буде рендеритися сторінка за замовченням

### 08 Intercepting Routes
- (.) => той же рівень
- (..) => рівнем вище
- (..)(..) => двома рівнями вище
- (...) => в кореневий каталог
- companies/@modal/(.)new/page.tsx => перехоплення роуту => companies/new/page.tsx
- 