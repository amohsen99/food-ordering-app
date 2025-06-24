To install and set up **Prisma** with **TypeScript** in a **Next.js** app, follow these steps:

---

### ✅ Prerequisites

Make sure you have a Next.js app already:

```bash
npx create-next-app@latest my-app --typescript
cd my-app
```

---

### 1. **Install Prisma and TypeScript dependencies**

```bash
npm install prisma --save-dev
npm install @prisma/client
```

Then initialize Prisma:

```bash
npx prisma init
```

This creates:

* `prisma/schema.prisma` – the schema file
* `.env` – where your database URL will go

---

### 2. **Set up your database**

Edit the `.env` file:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

*(Replace with your actual database credentials. Prisma supports PostgreSQL, MySQL, SQLite, etc.)*

---

### 3. **Define your Prisma schema**

Edit `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // or "mysql", "sqlite", etc.
  url      = env("DATABASE_URL")
}

model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

---

### 4. **Run the migration and generate Prisma client**

```bash
npx prisma migrate dev --name init
```

This:

* Runs migration to create the database tables
* Generates the Prisma client for TypeScript use

---

### 5. **Use Prisma Client in your app**

You can now use Prisma Client in your Next.js API routes or server components.

Example in `pages/api/users.ts`:

```ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await prisma.user.findMany()
  res.status(200).json(users)
}
```

---

### ✅ Done!

You now have Prisma set up in your Next.js + TypeScript app.

Let me know if you need help setting up a specific database (PostgreSQL, SQLite, etc.) or want a reusable Prisma client setup (e.g. `lib/prisma.ts`).
