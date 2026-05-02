import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Script from 'next/script'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: 'Paul International School — Lakhimpur Kheri',
  description: 'Paul International School, established 2002. CBSE-affiliated school in Lakhimpur Kheri offering quality education with a blend of tradition and modernity.',
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  openGraph: { title: 'Paul International School', description: 'CBSE-affiliated school in Lakhimpur Kheri.', images: ['/og-image.png'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" async></script>
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="min-h-screen flex flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
          <ChunkLoadErrorHandler />
        </ThemeProvider>
      </body>
    </html>
  )
}
