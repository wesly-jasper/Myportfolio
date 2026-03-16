import { motion } from "framer-motion";
import { FileText, Languages, Smartphone, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: <FileText size={24} />,
    iconBg: "bg-primary/10 text-primary",
    title: "Halo Scanner",
    subtitle: "AI Invoice Intelligence System",
    description:
      "An AI-powered invoice processing platform that extracts structured data from invoices using OCR and LLM technologies. Features multi-format document input, GSTIN validation, and MongoDB storage.",
    tags: ["Python", "Flask", "MongoDB", "OCR", "LLM"],
    hoverGradient: "hover:from-primary/20 hover:to-accent/20",
  },
  {
    icon: <Languages size={24} />,
    iconBg: "bg-accent/10 text-accent",
    title: "Inscription AI",
    subtitle: "Ancient Inscription Translation System",
    description:
      "An AI system to decode historical stone inscriptions using computer vision and language models. Pipeline: image preprocessing, stroke enhancement, character detection, OCR, script normalization, translation with LLM, and historical context generation.",
    tags: ["OpenCV", "TrOCR", "Transformers", "VectorDB", "Python"],
    hoverGradient: "hover:from-accent/20 hover:to-primary/20",
  },
  {
    icon: <Smartphone size={24} />,
    iconBg: "bg-green-500/10 text-green-400",
    title: "MediLink",
    subtitle: "Healthcare Mobile App",
    description:
      "A healthcare mobile application to manage blood donation requests and connect donors with patients. Includes Firebase authentication, push notifications, and hospital information management.",
    tags: ["Flutter", "Firebase", "Dart"],
    hoverGradient: "hover:from-green-500/20 hover:to-primary/20",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-card">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-2"
          >
            Featured Projects
          </motion.h2>
          <p className="text-muted-foreground">Selected work in AI and Full-Stack development.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`group relative p-[1px] rounded-[2rem] bg-border hover:bg-gradient-to-br ${project.hoverGradient} transition-all duration-500`}
          >
            <div className="bg-background rounded-[calc(2rem-1px)] p-8 h-full flex flex-col">
              <div className="mb-6 flex justify-between items-start">
                <div className={`p-3 rounded-2xl ${project.iconBg}`}>{project.icon}</div>
                <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-bold text-secondary-foreground mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
              <p className="text-foreground text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-secondary rounded text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
