'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "ri-code-s-slash-line",
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "Python", level: 90, icon: "ri-terminal-line" },
        { name: "JavaScript", level: 85, icon: "ri-javascript-line" },
        { name: "SQL", level: 88, icon: "ri-database-2-line" },
        { name: "Java", level: 75, icon: "ri-cup-line" },
      ]
    },
    {
      title: "Data Engineering & Analytics",
      icon: "ri-database-2-line",
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "Snowflake", level: 85, icon: "ri-cloud-line" },
        { name: "ETL Pipelines", level: 82, icon: "ri-shuffle-line" },
        { name: "Apache Spark", level: 70, icon: "ri-flashlight-line" },
        { name: "Data Warehousing", level: 78, icon: "ri-archive-line" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "ri-cloud-line",
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Google Cloud Platform", level: 88, icon: "ri-cloud-line" },
        { name: "AWS", level: 70, icon: "ri-amazon-line" },
      ]
    },
    {
      title: "Web Development",
      icon: "ri-global-line",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "React", level: 80, icon: "ri-reactjs-line" },
        { name: "Node.js", level: 75, icon: "ri-nodejs-line" },
        { name: "HTML/CSS", level: 85, icon: "ri-html5-line" },
        { name: "Tailwind CSS", level: 80, icon: "ri-css3-line" }
      ]
    },
    {
      title: "Machine Learning",
      icon: "ri-brain-line",
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "Scikit-learn", level: 75, icon: "ri-algorithm-line" },
        { name: "Pandas", level: 85, icon: "ri-file-chart-line" },
        { name: "NumPy", level: 80, icon: "ri-calculator-line" },
        { name: "TensorFlow", level: 65, icon: "ri-brain-line" },
      ]
    }
  ];

  const tools = [
    { name: "Git", icon: "ri-git-branch-line" },
    { name: "VS Code", icon: "ri-code-line" },
    { name: "Jupyter", icon: "ri-file-code-line" },
    { name: "Postman", icon: "ri-send-plane-line" },
    { name: "Figma", icon: "ri-pencil-ruler-line" },
    { name: "Linux", icon: "ri-terminal-line" }
  ];

  return (
    <section className="section-container" id="skills">
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
            Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical expertise across different domains
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="card"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <i className={`${category.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <i className={`${skill.icon} text-gray-400 text-sm mr-2`}></i>
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-yellow-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5, duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="card mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Tools & Technologies</h2>
            <p className="text-gray-400">Essential tools that power my development workflow</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/5 p-6 rounded-2xl text-center hover:bg-white/10 transition-all cursor-pointer border border-white/10 hover:border-yellow-400/50"
              >
                <i className={`${tool.icon} text-yellow-400 text-4xl mb-3`}></i>
                <p className="text-sm font-medium text-white">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "ri-time-line", value: "1+", label: "Years of Experience", color: "from-blue-500 to-purple-600" },
            { icon: "ri-award-line", value: "8+", label: "Projects Completed", color: "from-green-500 to-teal-600" },
            { icon: "ri-stack-line", value: "4", label: "Technology Stacks", color: "from-orange-500 to-red-600" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="card text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <i className={`${stat.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="text-center mt-16"
        >
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Ready to leverage these skills for your next project? Let's discuss how I can contribute to your team's success.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="mailto:harshavardhanyempally302@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <i className="ri-mail-line"></i>
                  Get In Touch
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
