"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import { allCategoria, allProductos, Categoria } from "contentlayer/generated"
import PostsPagination from "@/components/PostsPagination"

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categorias.map((cat) => (
            <div key={cat.slug} className="relative transition-all duration-300">
              <button
                onClick={() => {
                  setActiveCategory(cat.slug)
                  setCurrentPage(1)
                }}
                className="absolute inset-0 z-10"
              />
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow w-full flex flex-col items-center">
                <Image src={cat.image} alt={cat.title} width={100} height={100} />
                <h4 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{cat.title}</h4>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeCategory && (
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

            const backgroundColor = cat.color ? `#${cat.color.replace(/^#/, '')}` : "#fefefe"

            return (
              <section
                key={cat.slug}
                ref={categoriaRef}
                className="mt-6 p-6 rounded-xl shadow w-full relative"
                style={{ backgroundColor }}
              >
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full"
                  >
                    ✕
                  </button>
                </div>
                <h4 className="text-2xl font-bold text-center text-white mb-8">{cat.title}</h4>
                {productosDeCategoria.length === 0 ? (
                  <p className="text-center text-white">No hay productos disponibles para esta categoría.</p>
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
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{producto.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                            Talla: {producto.size || 'Única'}
                          </p>
                          <p className="text-lg font-bold text-blue-600">${producto.price}</p>
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
      )}
    </section>
  )
}
