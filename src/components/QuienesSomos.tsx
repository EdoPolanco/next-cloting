import { motion } from 'framer-motion'

export default function QuienesSomos() {
  return (
<motion.section
  id="quienes"
  className="py-16 px-6 bg-white dark:bg-black"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, delay: 0.4 }}
>
  <motion.h3
    className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Quiénes Somos
  </motion.h3>
  <motion.p
    className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    Somos una tienda enfocada en moda femenina que busca empoderar a través de cada prenda.
  </motion.p>
</motion.section>
  )
}
