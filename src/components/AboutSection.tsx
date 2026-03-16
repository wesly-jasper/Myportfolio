import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 bg-card">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-6 text-center"
    >
      <h2 className="section-heading mb-8">About Me</h2>
      <p className="text-lg leading-relaxed text-foreground">
        I am an AI-focused developer passionate about building intelligent systems that understand
        images, documents, and languages. My work focuses on{" "}
        <span className="text-secondary-foreground font-medium">OCR, computer vision</span>, and
        AI-powered applications such as invoice intelligence systems, inscription translation models,
        and mobile healthcare platforms. I enjoy combining machine learning with real-world
        applications to solve complex problems.
      </p>
    </motion.div>
  </section>
);

export default AboutSection;
