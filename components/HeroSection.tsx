'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [particles, setParticles] = useState<Array<{ id: number, size: number, x: number, y: number, duration: number, delay: number }>>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Reduce particles on mobile for performance
    const particleCount = window.innerWidth < 768 ? 8 : 20;

    setParticles(Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    })));

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/50 to-[#0a0e27]"></div>

      {/* Animated Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating Stars - Hidden on mobile for performance */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-40 right-20 text-yellow-400 text-4xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ✦
          </motion.div>

          <motion.div
            className="absolute bottom-40 left-20 text-yellow-400 text-2xl opacity-60"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            ✦
          </motion.div>

          <motion.div
            className="absolute top-1/2 right-1/3 text-yellow-400 text-3xl opacity-40"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          >
            ✦
          </motion.div>
        </>
      )}

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
      >
        <div className="flex items-center justify-center min-h-[70vh]">
          {/* Centered Content */}
          <div className="text-center max-w-5xl">
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs md:text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                Software Developer & Data Engineer
              </span>
            </motion.div>

            {/* Main Heading with Letter Animation */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
            >
              <motion.span
                className="block text-white mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Hi, I'm{' '}
                <span className="gradient-text inline-block">
                  Harsha Vardhan
                </span>
              </motion.span>

              <motion.span
                className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 font-normal"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Transforming Data Into{' '}
                <span className="text-yellow-400 font-bold">Insights</span>
              </motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto px-4"
            >
              Passionate about building scalable solutions and creating innovative
              applications that drive business value through data engineering and full-stack development.
            </motion.p>

            {/* Animated Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 max-w-3xl mx-auto"
            >
              {[
                { value: '8+', label: 'Projects' },
                { value: '4', label: 'Tech Stacks' },
                { value: '1+', label: 'Years Experience' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glass p-4 md:p-6 rounded-2xl"
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            >
              <Link href="/projects" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary group w-full sm:w-auto justify-center"
                >
                  View My Work
                  <motion.i
                    className="ri-arrow-right-line"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  ></motion.i>
                </motion.button>
              </Link>

              <Link href="/about" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary w-full sm:w-auto justify-center"
                >
                  Learn More About Me
                  <i className="ri-user-star-line"></i>
                </motion.button>
              </Link>
            </motion.div>

            {/* Floating Icons - Hidden on mobile */}
            {!isMobile && (
              <motion.div
                className="mt-16 flex justify-center gap-8"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
              >
                {[
                  { icon: 'ri-code-s-slash-line', delay: 0 },
                  { icon: 'ri-database-2-line', delay: 0.2 },
                  { icon: 'ri-cloud-line', delay: 0.4 },
                  { icon: 'ri-brain-line', delay: 0.6 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: 'easeInOut',
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-yellow-400 text-2xl cursor-pointer hover:bg-yellow-400/10 transition-colors"
                  >
                    <i className={item.icon}></i>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm">Scroll Down</span>
            <i className="ri-arrow-down-line text-xl"></i>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

