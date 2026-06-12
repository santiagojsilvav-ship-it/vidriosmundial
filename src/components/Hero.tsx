"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-[#f8f8f8] pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase text-[#666666] border border-[#e5e5e5] rounded-full bg-white">
            Representantes Oficiales Metalglás Bonomi
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] mb-8 leading-tight"
        >
          Soluciones Premium
          <br />
          <span className="text-[#666666]">en Vidrio y Aluminio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Vidrios templados, laminados, blindados y sistemas de aluminio
          arquitectónico. Transformamos espacios con calidad y precisión.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contacto"
            className="px-8 py-4 bg-[#111111] text-white font-medium text-base rounded hover:bg-[#333333] transition-colors duration-200"
          >
            Solicitar Cotización
          </Link>
          <Link
            href="#proyectos"
            className="px-8 py-4 border border-[#e5e5e5] text-[#111111] font-medium text-base rounded hover:bg-[#f8f8f8] transition-colors duration-200"
          >
            Ver Proyectos
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-[#999999]"
        >
          <span className="text-xs tracking-widest uppercase mb-3">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
