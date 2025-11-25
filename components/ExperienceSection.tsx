'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: "Kasmo Digital",
      role: "Data Scientist",
      period: "Present",
      status: "Current Position",
      responsibilities: [
        "Developing and deploying machine learning models to solve business problems",
        "Analyzing complex datasets to derive actionable insights and drive decision-making",
        "Collaborating with engineering teams to integrate data solutions into production systems",
        "Conducting A/B testing and statistical analysis to validate model performance",
        "Optimizing data pipelines for improved efficiency and scalability"
      ],
      technologies: ["Python", "Machine Learning", "Deep Learning", "SQL", "TensorFlow", "PyTorch"],
      icon: "ri-brain-line",
      color: "blue"
    },
    {
      company: "Kasmo Digital",
      role: "Data Engineer Intern",
      period: "Previous",
      status: "Completed",
      responsibilities: [
        "Developing and maintaining ETL pipelines using Python and SQL",
        "Working with Snowflake data warehouse for data processing and analytics",
        "Implementing data quality checks and validation processes",
        "Collaborating with cross-functional teams on data-driven solutions",
        "Optimizing database performance and query efficiency"
      ],
      technologies: ["Python", "SQL", "Snowflake", "ETL", "Data Warehousing"],
      icon: "ri-database-2-line",
      color: "green"
    },
    {
      company: "Coder One",
      role: "Data Science Intern",
      period: "Previous",
      status: "Completed",
      responsibilities: [
        "Conducted comprehensive data analysis on large datasets",
        "Developed machine learning models for predictive analytics",
        "Created data visualizations and reports for stakeholders",
        "Performed statistical analysis and hypothesis testing",
        "Collaborated on feature engineering and model optimization"
      ],
      technologies: ["Python", "Machine Learning", "Data Analysis", "Statistics", "Visualization"],
      icon: "ri-line-chart-line",
      color: "green"
    }
  ];

  return (
    <section className="section-container" id="experience">
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
            Career Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            Building expertise through hands-on experience in data engineering and data science
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 hidden md:block"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.2, type: 'spring', stiffness: 200 }}
                  className={`absolute left-6 w-5 h-5 rounded-full ${exp.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                    } border-4 border-[#0a0e27] shadow-lg hidden md:block z-10`}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className={`absolute inset-0 rounded-full ${exp.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                      }`}
                  />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="ml-0 md:ml-16 card w-full"
                >
                  <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 ${exp.color === 'blue' ? 'bg-blue-500/20' : 'bg-green-500/20'
                        } rounded-2xl flex items-center justify-center mr-6`}>
                        <i className={`${exp.icon} ${exp.color === 'blue' ? 'text-blue-400' : 'text-green-400'
                          } text-3xl`}></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <p className="text-xl text-gray-300 font-semibold">{exp.company}</p>
                        <p className={`text-sm font-medium ${exp.color === 'blue' ? 'text-blue-400' : 'text-green-400'
                          } mt-1`}>
                          {exp.status} • {exp.period}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <motion.li
                            key={respIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 1 + index * 0.2 + respIndex * 0.1 }}
                            className="flex items-start group"
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                            <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1.2 + index * 0.2 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${exp.color === 'blue'
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                              : 'bg-green-500/20 text-green-300 border border-green-500/30'
                              }`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="card bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-yellow-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Opportunities</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm actively seeking full-time opportunities in Data Science, Software Development, and Cloud Computing.
              Let's connect and discuss how I can contribute to your team's success.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/harsha-vardhan-yempally"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <i className="ri-linkedin-line"></i>
                  Connect on LinkedIn
                </motion.button>
              </a>
              <a href="/Harsha_Vardhan_Resume.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  <i className="ri-download-line"></i>
                  Download Resume
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
