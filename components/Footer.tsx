import React from 'react';
import { PROFILE } from '../constants';

export const Footer: React.FC = () => {
  return (
    <>
      <section id="contact" className="bg-white dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Let's Connect</h2>

          <div className="flex space-x-8 mb-10">
            {PROFILE.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-neon-cyan hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#05051e] py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 text-slate-300 text-sm">

            <span className="text-center">
              © 2026 Enamul Hasan | All rights reserved.
            </span>

            <span className="hidden md:block mx-8 h-4 w-px bg-slate-600"></span>

            <a href="mailto:enamulhasan248@gmail.com" className="hover:text-white transition-colors">
              Contact: enamulhasan248@gmail.com
            </a>

            <span className="hidden md:block mx-8 h-4 w-px bg-slate-600"></span>

            <a href="tel:+8801998589166" className="hover:text-white transition-colors">
              phone: +8801998589166
            </a>

          </div>
        </div>
      </footer>
    </>
  );
};