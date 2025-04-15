'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Startup'
import CategoriaMenu from '@/components/CategoriaMenu'
import VisionMision from '@/components/VisionMision'
import QuienesSomos from '@/components/QuienesSomos'
import Contacto from '@/components/Contacto'
import ScrollTopButton from '@/components/ScrollTopButton'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen flex flex-col">
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <CategoriaMenu />
      <VisionMision />
      <QuienesSomos />
      <Contacto />
      <ScrollTopButton />
    </main>
  )
}
