To install **NextAuth.js** in your **Next.js** project using **npm**, follow these steps:

---

### ✅ Step 1: Initialize your Next.js project (if you haven’t already)

```bash
npx create-next-app@latest my-nextauth-app
cd my-nextauth-app
```

---

### ✅ Step 2: Install NextAuth

```bash
npm install next-auth
```

---

### ✅ Step 3: Create the API route for NextAuth

Create a file at:

```
/pages/api/auth/[...nextauth].ts  (or .js)
```

Example content:

```ts
// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };
```

> 🔐 Replace with your desired providers (Google, Credentials, etc.)

---

### ✅ Step 4: Set environment variables

Create a `.env.local` file in the root and add:

```
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_random_secret
```

You can generate a secret with:

```bash
openssl rand -base64 32
```

---

### ✅ Step 5: Use the `SessionProvider` in `_app.tsx` or `_app.js`

```tsx
// pages/_app.tsx
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
```

---

### ✅ Step 6: Add login / logout buttons

```tsx
import { signIn, signOut, useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn()}>Sign In</button>
      ) : (
        <>
          <p>Signed in as {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      )}
    </div>
  );
}
```

---

Let me know if you'd like to use a different provider (e.g., Google, Credentials, Email), or need a database setup (PostgreSQL, MongoDB, etc).
