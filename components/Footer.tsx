'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: 'Home', icon: 'ri-home-line' },
    { href: '/about', label: 'About', icon: 'ri-user-line' },
    { href: '/projects', label: 'Projects', icon: 'ri-folder-line' },
    { href: '/experience', label: 'Experience', icon: 'ri-briefcase-line' },
    { href: '/skills', label: 'Skills', icon: 'ri-tools-line' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/harsha-vardhan-yempally', icon: 'ri-linkedin-fill', label: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
    { href: 'https://github.com/Harsha0o', icon: 'ri-github-fill', label: 'GitHub', color: 'from-gray-700 to-gray-800' },
    { href: 'mailto:harshavardhanyempally302@gmail.com', icon: 'ri-mail-fill', label: 'Email', color: 'from-yellow-500 to-yellow-600' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#0f1419] to-[#050810] text-white py-12 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4"
            >
              Harsha <span className="gradient-text">Vardhan</span>
            </motion.h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Software Developer and Data Engineer passionate about creating innovative solutions
              and transforming data into actionable insights. Always eager to take on new challenges.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center hover:shadow-lg transition-shadow`}
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-white text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <i className={`${link.icon} mr-2 group-hover:scale-110 transition-transform`}></i>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Contact Info</h4>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center group"
              >
                <div className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-yellow-400/20 transition-colors">
                  <i className="ri-mail-line text-yellow-400"></i>
                </div>
                <a
                  href="mailto:harshavardhanyempally302@gmail.com"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  harshavardhanyempally302@gmail.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center group"
              >
                <div className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-yellow-400/20 transition-colors">
                  <i className="ri-phone-line text-yellow-400"></i>
                </div>
                <a
                  href="tel:+919542195741"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  +91 95421 95741
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center group"
              >
                <div className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-yellow-400/20 transition-colors">
                  <i className="ri-map-pin-line text-yellow-400"></i>
                </div>
                <span className="text-gray-400">India</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm mb-2">
            © {currentYear} Harsha Vardhan • Crafted with <span className="text-yellow-400">☕</span> and <span className="text-purple-400">code</span>
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-gray-500 text-xs flex items-center justify-center gap-2 flex-wrap"
          >
            <span>Powered by</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/5 rounded-md border border-white/10">
              <span className="text-white font-semibold">Next.js</span>
            </span>
            <span className="text-gray-600">•</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-cyan-500/10 rounded-md border border-cyan-500/20">
              <span className="text-cyan-400 font-semibold">Tailwind</span>
            </span>
            <span className="text-gray-600">•</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-500/10 rounded-md border border-purple-500/20">
              <span className="text-purple-400 font-semibold">Framer Motion</span>
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="text-gray-600 text-xs mt-3 italic"
          >
            "Turning caffeine into code, one commit at a time" <span className="text-yellow-400">⚡</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
