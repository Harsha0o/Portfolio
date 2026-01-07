'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: 'ri-code-box-line',
      title: 'Website Development',
      description: 'Building responsive and scalable web applications using modern technologies and best practices.',
    },
    {
      icon: 'ri-database-2-line',
      title: 'Data Engineering',
      description: 'Designing and implementing robust ETL pipelines and data warehousing solutions for analytics.',
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Solutions',
      description: 'Deploying and managing cloud infrastructure on GCP and AWS with focus on scalability.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="section-container" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-yellow-400 font-semibold mb-4 uppercase tracking-wider text-sm"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Compelling Portfolios That
            <br />
            <span className="gradient-text">Leave A Lasting Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            Passionate about transforming data into insights and building scalable solutions.
            With expertise in data engineering, cloud computing, and full-stack development,
            I create innovative solutions that drive business value.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card group cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow-yellow transition-shadow"
              >
                <i className={`${service.icon} text-3xl text-[#0a0e27]`}></i>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Arrow Icon */}
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="mt-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <i className="ri-arrow-right-line text-xl"></i>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left Column */}
          <div className="space-y-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-graduation-cap-line text-blue-400 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-white">Educational Background</h3>
              </div>
              <p className="text-gray-400">
                Bachelor's degree in <strong className="text-white">Information Technology from TKR College of Engineering and Technology</strong>, with a strong foundation in computer science fundamentals, data structures, and software engineering principles.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-briefcase-line text-green-400 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-white">Current Role</h3>
              </div>
              <p className="text-gray-400">
                <strong className="text-white">Data Engineer Intern at Kasmo Digital</strong> - Working on ETL pipelines, data processing, and cloud-based solutions using modern data engineering tools and practices.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-compass-3-line text-orange-400 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-white">Career Goals</h3>
              </div>
              <p className="text-gray-400">
                Seeking roles in <strong className="text-white">Data Science, Data Engineering, Development, and Cloud Computing</strong>. Passionate about leveraging technology to solve complex business problems and drive data-driven decision making.
              </p>
            </div>
          </div>

          {/* Right Column - Certifications */}
          <div className="card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                <i className="ri-award-line text-yellow-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white">Certifications</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-white mb-2">Google Cloud Platform – NPTEL Certified</h4>
                <p className="text-gray-400 text-sm">
                  Comprehensive certification covering GCP services, cloud architecture, and best practices for cloud computing solutions.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="font-semibold text-white mb-2">Python for Data Science – NPTEL Certified</h4>
                <p className="text-gray-400 text-sm">
                  Focused on Python fundamentals, data analysis using NumPy and Pandas, data visualization, and basic machine learning concepts.
                </p>
              </div>

              <div className="border-l-4 border-gray-500 pl-6">
                <h4 className="font-semibold text-white mb-2">Programming in Java – NPTEL Certified</h4>
                <p className="text-gray-400 text-sm">
                  Comprehensive certification covering fundamental to advanced Java programming, including OOP, multithreading, and JDBC.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-white mb-2">Technical Workshops</h4>
                <p className="text-gray-400 text-sm">
                  Participated in various technical workshops focused on emerging technologies and software development methodologies.
                </p>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-xl border border-yellow-400/20">
              <h4 className="font-semibold text-white mb-3">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">Data Engineering</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">Cloud Computing</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">Machine Learning</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
