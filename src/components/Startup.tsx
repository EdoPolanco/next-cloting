'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      id="inicio"
      className="text-center py-20 bg-gray-50 dark:bg-[#111111]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Estilo y Comodidad para Ti
      </motion.h2>
      <motion.p
        className="text-gray-600 dark:text-gray-300 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Descubre nuestra colección exclusiva de ropa para cada ocasión.
      </motion.p>
      <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-md mx-auto">
        <Swiper spaceBetween={10} slidesPerView={1} loop autoplay={{
          delay: 3000, // cada 3 segundos
          disableOnInteraction: false, // sigue aunque el usuario interactúe
        }}
          modules={[Autoplay]}>
          <SwiperSlide>
            <Image src="/assets/banner/banner-01.jpg" alt="Promo 1" width={600} height={300} quality={100} className="rounded w-full max-h-[250px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/banner/banner-02.jpg" alt="Promo 2" width={600} height={300} quality={100} className="rounded w-full max-h-[250px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/banner/banner-03.jpg" alt="Promo 3" width={600} height={300} quality={100} className="rounded w-full max-h-[250px] object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.section>
  )
}
