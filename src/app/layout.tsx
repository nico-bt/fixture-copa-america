import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Copa America 2024",
  description: "Arma tu prediccion",
  authors: { name: "Nicolas Battaglia" },
  keywords: ["Next.js", "React", "JavaScript", "Copa America"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="max-w-[1000px] mx-auto flex min-h-screen flex-col gap-6 p-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
