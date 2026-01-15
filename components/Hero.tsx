import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin } from 'lucide-react';
import { PROFILE, ABOUT } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
        >
          {PROFILE.name}
        </motion.h1>

        {/* Animated Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl font-medium text-blue-600 dark:text-neon-cyan mb-8 h-8"
        >
          {PROFILE.tagline}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center text-slate-600 dark:text-slate-400 mb-8"
        >
          <MapPin size={18} className="mr-2" />
          {PROFILE.location}
        </motion.div>

        {/* About Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-2xl text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed"
        >
          {ABOUT.summary}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 dark:bg-neon-cyan/90 dark:text-slate-950 dark:hover:bg-neon-cyan transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </a>
          <a
            href="Enamul_Hasan_CV.pdf"
            download="Enamul_Hasan_CV.pdf"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-slate-200 dark:border-slate-700 text-base font-medium rounded-full text-slate-700 dark:text-slate-200 hover:border-blue-500 dark:hover:border-neon-violet hover:text-blue-500 dark:hover:text-neon-violet bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-slate-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};