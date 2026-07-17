import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Myint Thu Aung — Senior Full-Stack .NET Developer",
  description:
    "Senior Full-Stack .NET Developer with 7+ years of experience building secure, scalable web applications with C#, ASP.NET Core, Vue.js, React, and SQL Server.",
  keywords: [
    "Myint Thu Aung",
    ".NET Developer",
    "Full-Stack Developer",
    "C#",
    "ASP.NET Core",
    "Vue.js",
    "React",
    "SQL Server",
  ],
  authors: [{ name: "Myint Thu Aung" }],
  openGraph: {
    title: "Myint Thu Aung — Senior Full-Stack .NET Developer",
    description:
      "Senior Full-Stack .NET Developer with 7+ years of experience building secure, scalable web applications.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#101418",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
