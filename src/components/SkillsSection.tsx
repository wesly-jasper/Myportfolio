import { motion } from "framer-motion";

const categories = [
  {
    title: "AI / Machine Learning",
    color: "text-primary",
    dotColor: "bg-primary",
    skills: ["Computer Vision", "OCR Systems", "CNN Models", "Vision Transformers", "NLP", "LLM Integration"],
  },
  {
    title: "Programming",
    color: "text-accent",
    dotColor: "bg-accent",
    skills: ["Python", "JavaScript", "Dart", "SQL"],
  },
  {
    title: "Frameworks & Tools",
    color: "text-secondary-foreground",
    dotColor: "bg-muted-foreground",
    skills: ["Flask", "React", "Flutter", "Node.js", "OpenCV", "MongoDB", "Firebase", "Tesseract OCR", "PaddleOCR", "Git"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading mb-12 text-center"
      >
        Technical Stack
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card-surface p-8"
          >
            <h3 className={`${cat.color} font-bold mb-6 flex items-center gap-2`}>
              <span className={`w-2 h-2 rounded-full ${cat.dotColor}`} />
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
