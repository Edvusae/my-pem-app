import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// This would typically come from your database
// For now, using in-memory storage for demonstration
interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
}

// Mock user database - Replace with actual database queries
const users: User[] = [
  {
    id: "1",
    email: "admin@example.com",
    password: "$2a$10$YourHashedPasswordHere", // "admin123" hashed
    name: "Admin User",
    role: "admin"
  },
  {
    id: "2",
    email: "user@example.com",
    password: "$2a$10$YourHashedPasswordHere", // "user123" hashed
    name: "Regular User",
    role: "user"
  }
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        // Find user in database
        const user = users.find(u => u.email === credentials.email);

        if (!user) {
          throw new Error("User not found");
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as "admin" | "user";
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

