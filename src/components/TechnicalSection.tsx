import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Cpu, Zap } from "lucide-react";

const techNotes = [
  {
    icon: Code,
    title: "Minecraft Modding",
    description:
      "Built on Fabric mod loader. Agents run as in-game entities with custom AI controllers that interface with the Minecraft world.",
    color: "grass",
  },
  {
    icon: Cpu,
    title: "LLM Orchestration",
    description:
      "The orchestrator uses a language model to parse goals, generate task plans, and handle coordination logic between agents.",
    color: "oak",
  },
  {
    icon: Zap,
    title: "Event-Based Behavior",
    description:
      "Agents respond to world events and task assignments. Each action is atomic and reports completion status back to the orchestrator.",
    color: "stone",
  },
];

const TechnicalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card/50" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Technical Notes</h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            A brief look at how the system is built. For full details, check the documentation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {techNotes.map((note, index) => (
            <motion.div
              key={note.title}
              className="p-5 border border-border rounded-sm bg-background/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <div
                className={`w-10 h-10 rounded-sm flex items-center justify-center mb-4 ${
                  note.color === "grass"
                    ? "bg-grass/10"
                    : note.color === "oak"
                    ? "bg-oak/10"
                    : "bg-stone/10"
                }`}
              >
                <note.icon
                  className={`w-5 h-5 ${
                    note.color === "grass"
                      ? "text-grass"
                      : note.color === "oak"
                      ? "text-oak"
                      : "text-stone"
                  }`}
                />
              </div>
              <h3 className="font-bold text-foreground mb-2">{note.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {note.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
