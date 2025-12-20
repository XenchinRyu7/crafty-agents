import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const roadmapItems = [
  {
    title: "Basic Agent Behavior",
    description: "Gatherer, Crafter, and Builder agents with core functionality",
    status: "done",
  },
  {
    title: "Task Orchestration",
    description: "LLM-based goal parsing and task distribution",
    status: "done",
  },
  {
    title: "Better Coordination",
    description: "Improved agent-to-agent communication and resource sharing",
    status: "in-progress",
  },
  {
    title: "Memory & Planning",
    description: "Agents remember past actions and plan ahead for complex goals",
    status: "planned",
  },
  {
    title: "Multiplayer Support",
    description: "Multiple players can issue goals and observe agent behavior",
    status: "planned",
  },
  {
    title: "Custom Agent Types",
    description: "Allow players to define specialized agents for specific tasks",
    status: "planned",
  },
];

const RoadmapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "done":
        return <CheckCircle2 className="w-5 h-5 text-grass" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-gold" />;
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "done":
        return { text: "Complete", color: "text-grass bg-grass/10" };
      case "in-progress":
        return { text: "In Progress", color: "text-gold bg-gold/10" };
      default:
        return { text: "Planned", color: "text-muted-foreground bg-muted/50" };
    }
  };

  return (
    <section id="roadmap" className="py-24" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Roadmap</h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Where we've been and where we're headed. This is an experimental project, 
            so priorities may shift based on what we learn.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {roadmapItems.map((item, index) => {
            const statusLabel = getStatusLabel(item.status);
            return (
              <motion.div
                key={item.title}
                className="mc-panel p-5 flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              >
                <div className="mt-0.5">{getStatusIcon(item.status)}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded-sm ${statusLabel.color}`}
                    >
                      {statusLabel.text}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
