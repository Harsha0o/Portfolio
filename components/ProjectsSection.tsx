'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Ground Water Level Predictor",
      techStack: ["Python", "Flask", "Machine Learning", "SQL Server"],
      description: "Flask-based web application that predicts ground water levels using machine learning algorithms and historical data analysis.",
      icon: "ri-drop-line",
      color: "blue",
      github: "https://github.com/Harsha0o/Gwl-prediction"
    },
    {
      title: "Gmail ETL Pipeline",
      techStack: ["Python", "ETL", "AWS S3", "SQL Server"],
      description: "Automated pipeline that extracts email metadata and attachments, processes the data, and loads it to SQL Server and AWS S3 for analytics.",
      icon: "ri-mail-line",
      color: "green",
      github: "https://github.com/Harsha0o/ETL-PIPELINES/tree/master/Gmail"
    },
    {
      title: "SharePoint ETL Project",
      techStack: ["SQL Server", "MongoDB", "AWS S3", "Python"],
      description: "Comprehensive ETL solution handling structured data (SQL Server), semi-structured data (MongoDB), and unstructured data (S3).",
      icon: "ri-share-line",
      color: "purple",
      github: "https://github.com/Harsha0o/ETL-PIPELINES/tree/master/Sharepoint"
    },
    {
      title: "BikeStores Advanced SQL Analysis",
      techStack: ["SQL Server", "Data Analysis", "Query Optimization"],
      description: "Complex SQL queries and database optimization project analyzing bike store operations, sales patterns, and performance metrics.",
      icon: "ri-bike-line",
      color: "orange"
    },
    {
      title: "SCD Type ETL Project",
      techStack: ["Python", "SQL", "ETL", "Data Warehousing"],
      description: "Full and incremental data loads implementing Slowly Changing Dimensions (SCD) Types 1, 2, and 4 using Python and SQL.",
      icon: "ri-database-line",
      color: "indigo",
      github: "https://github.com/Harsha0o/ETL-PIPELINES/tree/master/src"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="section-container" id="projects">
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
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            A showcase of my technical expertise across data engineering, web development, and machine learning
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="card group cursor-pointer relative overflow-hidden"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-r ${project.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    project.color === 'green' ? 'from-green-500 to-green-600' :
                      project.color === 'purple' ? 'from-purple-500 to-purple-600' :
                        project.color === 'orange' ? 'from-orange-500 to-orange-600' :
                          'from-indigo-500 to-indigo-600'
                  } rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
              >
                <i className={`${project.icon} text-3xl text-white`}></i>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm border border-white/10 hover:border-yellow-400/50 hover:text-yellow-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors group/link"
                  >
                    <i className="ri-github-line mr-2"></i>
                    <span>View Code</span>
                    <motion.i
                      className="ri-arrow-right-line ml-1"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    ></motion.i>
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm">Private Repository</span>
                )}
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Harsha0o"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              <i className="ri-github-line"></i>
              View All Projects on GitHub
              <i className="ri-external-link-line"></i>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
