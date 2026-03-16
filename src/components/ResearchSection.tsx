import { motion } from "framer-motion";

const topics = [
  "Ancient Script OCR",
  "Low-resource Language Translation",
  "AI for Archaeology",
  "Vision-Language Models",
];

const ResearchSection = () => (
  <section id="research" className="py-24 border-y border-border">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading mb-12"
      >
        Research Interests
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topics.map((topic, i) => (
          <motion.div
            key={topic}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="p-6 bg-card/30 border border-border rounded-2xl hover:bg-secondary/50 transition-all cursor-default"
          >
            <div className="text-primary mb-4 font-mono text-xs">0{i + 1}.</div>
            <h4 className="text-secondary-foreground font-semibold">{topic}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
