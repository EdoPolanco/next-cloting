'use client'

import Link from 'next/link'

interface Props {
  theme?: string
  setTheme: (value: string) => void
}

export default function Header({ theme, setTheme }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-md">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">TiendaModa</h1>
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
          <li><a href="#inicio" className="hover:text-blue-500">Inicio</a></li>
          <li><a href="#productos" className="hover:text-blue-500">Productos</a></li>
          <li><a href="#vision" className="hover:text-blue-500">Visión y Misión</a></li>
          <li><a href="#quienes" className="hover:text-blue-500">Quiénes Somos</a></li>
          <li><a href="#contacto" className="hover:text-blue-500">Contáctanos</a></li>
        </ul>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-4 p-2 text-sm border rounded dark:text-white"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}
