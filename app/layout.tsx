import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GT Movies AI",
  description: "GT Movies AI - Your AI-powered movie companion",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <div className="fixed gt-gradient inset-0 -z-10 opacity-30 min-h-screen"></div>
          {/* <main className="container mx-auto px-4 py-8">{children}</main> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

