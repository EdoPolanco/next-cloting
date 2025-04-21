"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import { allCategoria, allProductos, Categoria } from "contentlayer/generated"
import PostsPagination from "@/components/PostsPagination"
import { motion } from 'framer-motion'
interface CategoriaExtendida extends Omit<Categoria, '_raw' | 'color'> {
  image: string
  color?: string
  slug: string
  _raw: {
    flattenedPath: string
  }
}

export default function CategoriaMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const productosPerPage = 3
  const categoriaRef = useRef<HTMLDivElement | null>(null)

  const categorias: CategoriaExtendida[] = allCategoria.map((cat) => ({
    ...cat,
    slug: cat._raw.flattenedPath,
    color: cat.color?.trim(),
    image: cat.image || '/placeholder.jpg',
    _raw: cat._raw
  }))

  return (
    <section id="productos" className="py-16 px-6 bg-white dark:bg-black">
      <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Productos</h3>

      {!activeCategory && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {categorias.map((cat) => (
            <motion.div
              key={cat.slug}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="relative transition-all duration-300 "
            >
              <button
                onClick={() => {
                  setActiveCategory(cat.slug)
                  setCurrentPage(1)
                }}
                className="absolute inset-0 z-10"
              />
              <motion.div
                key={cat.slug}
                whileHover={{ scale: 1.2, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow transition-all hover:shadow-xl flex flex-col items-center"
              >
                <Image src={cat.image} alt={cat.title} width={100} height={100} />
                <h4 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray ">{cat.title}</h4>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )
      }

      {
        activeCategory && (
          <div className="max-w-6xl mx-auto">
            {categorias.map((cat) => {
              const isActive = activeCategory === cat.slug
              if (!isActive) return null

              const productosDeCategoria = allProductos.filter(
                (p) => p.category.trim() === cat.slug.split("/").pop()
              )
              const totalPages = Math.ceil(productosDeCategoria.length / productosPerPage)
              const start = (currentPage - 1) * productosPerPage
              const end = start + productosPerPage
              const productosPaginados = productosDeCategoria.slice(start, end)

              // const backgroundColor = cat.color ? `#${cat.color.replace(/^#/, '')}` : "#fefefe"
              const backgroundColor = "#111111"

              return (
                <section
                  key={cat.slug}
                  ref={categoriaRef}
                  className="mt-6 p-6 rounded-xl shadow w-full relative bg-gray-50 dark:bg-[#111111]"
                  // style={{ backgroundColor }}
                >
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setActiveCategory(null)}
                      className="absolute top-4 right-4 text-red-500 hover:text-red-700 p-2 rounded-full transition-colors"
                      aria-label="Cerrar categoría"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <h4 className="text-2xl font-bold text-center text-white mb-8">{cat.title}</h4>
                  {productosDeCategoria.length === 0 ? (
                    <p className="text-center text-white dark:text-gray">No hay productos disponibles para esta categoría.</p>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {productosPaginados.map((producto) => (
                          <div key={producto._id} className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow">
                            <Image
                              src={producto.image || '/placeholder.jpg'}
                              alt={producto.title}
                              width={300}
                              height={300}
                              className="rounded w-full object-cover h-48 mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray mb-1">{producto.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-500 mb-1">
                              Talla: {producto.size || 'Única'}
                            </p>
                            <p className="text-lg font-bold text-blue-600 dark:text-gray-700">${producto.price}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <PostsPagination totalPages={totalPages} currentPages={currentPage} />
                      </div>
                    </>
                  )}
                </section>
              )
            })}
          </div>
        )
      }
    </section >
  )
}
