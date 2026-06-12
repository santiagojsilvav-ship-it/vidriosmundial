"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "25+", label: "Años de Experiencia" },
  { value: "500+", label: "Proyectos Completados" },
  { value: "100%", label: "Garantía de Calidad" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-[#666666] mb-4"
            >
              Sobre Nosotros
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-8"
            >
              Tradición e Innovación en Cada Proyecto
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-[#666666] text-base leading-relaxed"
            >
              <p>
                <strong className="text-[#111111]">Vidrios Mundial</strong> es
                una empresa venezolana con más de dos décadas de experiencia en
                soluciones arquitectónicas de vidrio y aluminio. Nos
                especializamos en proyectos de alta complejidad que requieren
                precisión, calidad y excelencia en cada detalle.
              </p>
              <p>
                Como{" "}
                <strong className="text-[#111111]">
                  representantes oficiales de Metalglás Bonomi
                </strong>
                , ofrecemos acceso a tecnología de vanguardia y materiales de la
                más alta calidad del mercado internacional. Esta alianza
                estratégica nos permite garantizar productos certificados que
                cumplen con los estándares más exigentes.
              </p>
              <p>
                Nuestro equipo de profesionales trabaja de la mano con
                arquitectos, ingenieros y desarrolladores para transformar
                visiones en realidad, entregando proyectos que superan
                expectativas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 p-6 border border-[#e5e5e5] rounded-lg bg-[#f8f8f8]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-white border border-[#e5e5e5] flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-[#111111]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#111111]">
                    Metalglás Bonomi
                  </h4>
                  <p className="text-[#666666] text-sm">
                    Representantes Oficiales en Venezuela
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#f8f8f8] rounded-lg p-10"
          >
            <div className="grid grid-cols-1 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-6 bg-white rounded-lg border border-[#e5e5e5]"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#111111] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#666666] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
