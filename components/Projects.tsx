import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-neon-cyan mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-slate-900/50 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 dark:bg-slate-950/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out filter grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" title="View Code">
                      <Github size={20} />
                    </a>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" title="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-neon-violet border border-blue-100 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};