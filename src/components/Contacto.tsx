import { motion } from 'framer-motion'

export default function Contacto() {
  return (
    <motion.section
      id="contacto"
      className="py-16 px-6 bg-gray-50 dark:bg-[#111111]"
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
        Contáctanos
      </motion.h3>
      <motion.p
        className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        ¿Tienes dudas? Escríbenos a contacto@tiendamoda.cl o síguenos en redes sociales.
      </motion.p>
    </motion.section>
  )
}
