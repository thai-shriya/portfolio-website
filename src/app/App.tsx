import { Download, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import profileImage from '../assets/profile.jpg';
import resumePdf from '../assets/ShriyaThai_SWE_Resume.pdf';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#fafaf8]/80 backdrop-blur-md border-b border-[#2d5f3f]/10 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-lg font-semibold text-[#1a1a1a] hover:text-[#2d5f3f] transition-colors"
            >
              Shriya Thai
            </button>
            <div className="hidden md:flex items-center gap-8">
              {['Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-colors ${activeSection === item.toLowerCase()
                    ? 'text-[#2d5f3f] font-medium'
                    : 'text-[#4a4a4a] hover:text-[#2d5f3f]'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[600px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1596994815510-9b03654a839a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpZm9ybmlhJTIwbW9ybmluZyUyMHN1bnNoaW5lJTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3NjgxMzkyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="California morning sunshine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf8]/70 via-[#fafaf8]/60 to-[#fafaf8]"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <img
                src={profileImage}
                alt="Shriya Thai"
                className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg ring-4 ring-white/50"
              />
            </motion.div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                Shriya Thai
              </h1>
              <p className="text-xl text-[#2d5f3f] mb-8 font-medium">
                AI Fullstack Software Engineer
              </p>
              <p className="text-lg text-[#4a4a4a] max-w-3xl leading-relaxed mb-8">
                Software Engineer with 3+ years of experience engineering high-performance microservices
                and AI-driven infrastructure. Specialized in designing scalable API architectures and
                orchestrating production-grade LLM workflows.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a
                  href={resumePdf}
                  download="ShriyaThai_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#2d5f3f] text-white rounded-lg hover:bg-[#234a32] transition-colors"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <a
                  href="https://linkedin.com/in/shriya-thai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#2d5f3f]/30 text-[#2d5f3f] rounded-lg hover:bg-[#2d5f3f]/5 transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12 hover:text-[#2d5f3f] transition-colors duration-300 cursor-default">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 p-6 rounded-lg hover:bg-[#fafaf8] hover:shadow-sm transition-all duration-300 cursor-default">
                <h3 className="text-lg font-semibold text-[#2d5f3f] mb-3">Backend & APIs</h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  Java (Spring Boot), Node.js (Express), Python, RESTful API Design
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-lg hover:bg-[#fafaf8] hover:shadow-sm transition-all duration-300 cursor-default">
                <h3 className="text-lg font-semibold text-[#2d5f3f] mb-3">Frontend</h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  React.js, TypeScript, JavaScript, CSS3, HTML5
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-lg hover:bg-[#fafaf8] hover:shadow-sm transition-all duration-300 cursor-default">
                <h3 className="text-lg font-semibold text-[#2d5f3f] mb-3">AI Infrastructure</h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  LLM Orchestration, RAG Pipelines, Vector Databases (Pinecone), LangChain, MCP, PyTorch
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-lg hover:bg-[#fafaf8] hover:shadow-sm transition-all duration-300 cursor-default">
                <h3 className="text-lg font-semibold text-[#2d5f3f] mb-3">Data & Storage</h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  SQL (PostgreSQL, MySQL), Redis (Caching), Database Indexing & Optimization
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-lg hover:bg-[#fafaf8] hover:shadow-sm transition-all duration-300 cursor-default">
                <h3 className="text-lg font-semibold text-[#2d5f3f] mb-3">DevOps & Cloud</h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  AWS (Bedrock, EC2, S3), Docker, Kubernetes, CI/CD, Git
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12 hover:text-[#2d5f3f] transition-colors duration-300 cursor-default">Experience</h2>

            {/* BotPoint */}
            <div className="mb-12 pb-12 border-b border-[#2d5f3f]/10 last:border-0 p-6 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 -mx-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a]">AI Engineer — AI Platform Engineering</h3>
                  <p className="text-[#2d5f3f] font-medium">BotPoint</p>
                </div>
                <div className="text-[#4a4a4a] mt-2 md:mt-0">
                  <p>Nov 2025 – Present</p>
                  <p className="text-sm">Remote, India</p>
                </div>
              </div>
              <ul className="space-y-3 text-[#4a4a4a] leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Architected and scaled a comprehensive AI platform to 2,000+ users, designing the system for high availability and seamless full-stack performance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Engineered a core AI Sandbox feature for advanced context engineering, serving as the platform’s primary technical driver for custom AI workflows.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Developed an AI-driven RSS Reader powered by Groq, allowing users to interactively query live feeds and receive instant, concise news synthesis.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Designed and implemented mission-critical features, including Role-Based Access Control and Stripe payment pipelines.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Optimized full-stack performance, specifically enhancing database indexing and frontend rendering to accelerate data retrieval and improve UX responsiveness.</span>
                </li>
              </ul>
            </div>

            {/* TechRobots Inc */}
            <div className="mb-12 pb-12 border-b border-[#2d5f3f]/10 last:border-0 p-6 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 -mx-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a]">Software Engineer</h3>
                  <p className="text-[#2d5f3f] font-medium">TechRobots Inc</p>
                </div>
                <div className="text-[#4a4a4a] mt-2 md:mt-0">
                  <p>Jan 2024 – May 2025</p>
                  <p className="text-sm">USA</p>
                </div>
              </div>
              <ul className="space-y-3 text-[#4a4a4a] leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Architected a Node.js MCP with AI agents enabling secure real-time data retrieval and automating 65% of technical troubleshooting workflows.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Optimized shared database throughput for 100K+ monthly requests by implementing Redis look-aside caching and refactoring legacy SQL joins, reducing P99 latency by 25%.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Engineered a multi-stage AI orchestration pipeline utilizing SLM on AWS Bedrock for real-time semantic filtering of 500k+ logs, reducing operational token costs by 25%.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Re-engineered API traffic management layers to support high-frequency AI agent requests, tuning Circuit Breaker thresholds to protect monolith stability.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Developed a Context Optimizer that dynamically transformed verbose responses from internal Java modules into structured data for LLM ingestion.</span>
                </li>
              </ul>
            </div>

            {/* Changing the Present */}
            <div className="mb-12 pb-12 border-b border-[#2d5f3f]/10 last:border-0 p-6 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 -mx-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a]">Software Engineer Intern</h3>
                  <p className="text-[#2d5f3f] font-medium">Changing the Present</p>
                </div>
                <div className="text-[#4a4a4a] mt-2 md:mt-0">
                  <p>Aug 2023 – Dec 2023</p>
                  <p className="text-sm">USA</p>
                </div>
              </div>
              <ul className="space-y-3 text-[#4a4a4a] leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Designed the database schema and backend architecture for a career profiling platform.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Developed robust REST endpoints to handle user data processing, ensuring ACID compliance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Integrated backend services with React frontends, debugging cross-origin issues and optimizing JSON payload sizes for faster rendering.</span>
                </li>
              </ul>
            </div>

            {/* Accenture Solutions */}
            <div className="mb-12 p-6 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 -mx-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a]">Software Engineer</h3>
                  <p className="text-[#2d5f3f] font-medium">Accenture Solutions</p>
                </div>
                <div className="text-[#4a4a4a] mt-2 md:mt-0">
                  <p>Nov 2020 – Nov 2021</p>
                  <p className="text-sm">India</p>
                </div>
              </div>
              <ul className="space-y-3 text-[#4a4a4a] leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Maintained and enhanced enterprise Java application, focusing on service-layer logic and business rule implementation.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Worked on report analysis using SQL and optimizing SQL queries for faster data retrieval.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2d5f3f] mt-1.5">•</span>
                  <span>Wrote test cases increasing code coverage and reducing regression bugs in production releases.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12 hover:text-[#2d5f3f] transition-colors duration-300 cursor-default">Education</h2>

            <div className="space-y-8">
              <div className="pb-8 border-b border-[#2d5f3f]/10 p-6 rounded-lg hover:bg-[#fafaf8] hover:shadow-sm transition-all duration-300 -mx-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1a1a1a]">Master of Science in Computer Science</h3>
                    <p className="text-[#2d5f3f] font-medium">California State University, Long Beach</p>
                  </div>
                  <div className="text-[#4a4a4a] mt-2 md:mt-0">
                    <p>May 2023</p>
                    <p className="text-sm">Long Beach, CA</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg hover:bg-[#fafaf8] hover:shadow-sm transition-all duration-300 -mx-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1a1a1a]">Bachelor of Engineering in Computer Science</h3>
                    <p className="text-[#2d5f3f] font-medium">Visvesvaraya Technological University</p>
                  </div>
                  <div className="text-[#4a4a4a] mt-2 md:mt-0">
                    <p>Aug 2020</p>
                    <p className="text-sm">Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 overflow-hidden min-h-[400px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1660692791363-670f606977b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpZm9ybmlhJTIwY29hc3QlMjBzdW5yaXNlJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzY4MTM5MjkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="California coast sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf8]/70 via-[#fafaf8]/60 to-[#fafaf8]/80"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Get In Touch</h2>
            <p className="text-lg text-[#4a4a4a] mb-8 max-w-2xl">
              I'm currently open to new opportunities and interesting projects.
              Feel free to reach out if you'd like to discuss potential collaborations or just want to connect.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="mailto:shriyathai7@gmail.com"
                className="inline-flex items-center gap-3 text-[#4a4a4a] hover:text-[#2d5f3f] transition-colors group"
              >
                <div className="p-3 rounded-lg bg-white/80 backdrop-blur-sm group-hover:bg-[#2d5f3f]/10 transition-colors shadow-sm">
                  <Mail size={20} className="text-[#2d5f3f]" />
                </div>
                <span>shriyathai7@gmail.com</span>
              </a>

              <a
                href="tel:+919959771199"
                className="inline-flex items-center gap-3 text-[#4a4a4a] hover:text-[#2d5f3f] transition-colors group"
              >
                <div className="p-3 rounded-lg bg-white/80 backdrop-blur-sm group-hover:bg-[#2d5f3f]/10 transition-colors shadow-sm">
                  <Phone size={20} className="text-[#2d5f3f]" />
                </div>
                <span>+91 9959771199</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#2d5f3f]/10">
        <div className="max-w-5xl mx-auto text-center text-sm text-[#4a4a4a]">
          <p>© 2026 Shriya Thai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}