import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, LANGUAGES } from '../constants';
import { GraduationCap, Award, Languages } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
             <div className="flex items-center mb-10">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400 mr-4">
                    <GraduationCap size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education & Awards</h2>
            </div>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-12">
              {EDUCATION.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-neon-violet border-4 border-white dark:border-slate-950"></div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                  <div className="text-lg text-indigo-600 dark:text-neon-cyan font-medium mb-2">{edu.institution}</div>
                  <p className="text-slate-500 dark:text-slate-400 mb-4">{edu.details}</p>
                  
                  <div className="space-y-3">
                     {edu.awards.map((award, i) => (
                        <div key={i} className="flex items-start bg-white dark:bg-slate-900 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
                             <Award size={18} className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                             <span className="text-slate-700 dark:text-slate-300 text-sm">{award}</span>
                        </div>
                     ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div>
            <div className="flex items-center mb-10">
                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl text-pink-600 dark:text-pink-400 mr-4">
                    <Languages size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Languages</h2>
            </div>

            <div className="grid gap-6">
                {LANGUAGES.map((lang, index) => (
                    <motion.div 
                        key={lang.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800"
                    >
                        <span className="text-lg font-bold text-slate-900 dark:text-white">{lang.name}</span>
                        <span className="px-4 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">
                            {lang.level}
                        </span>
                    </motion.div>
                ))}
            </div>
            
            {/* Additional "Soft Skills" filler based on profile to balance layout */}
             <div className="mt-12">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Work Approach</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Team Player', 'Clear Communication', 'Deadline Driven', 'Performance Optimized'].map((item) => (
                        <div key={item} className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-center text-sm font-medium">
                            {item}
                        </div>
                    ))}
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};