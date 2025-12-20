import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, GitBranch, Play } from "lucide-react";

const steps = [
  {
    icon: Target,
    step: "01",
    title: "Player Sets a Goal",
    description:
      "Tell the agents what you want. 'Build a shelter' or 'Gather enough iron for armor'. Simple, natural commands.",
    color: "grass",
  },
  {
    icon: GitBranch,
    step: "02",
    title: "Orchestrator Plans",
    description:
      "A central coordinator breaks down your goal into tasks, assigns them to available agents, and handles dependencies.",
    color: "oak",
  },
  {
    icon: Play,
    step: "03",
    title: "Agents Act",
    description:
      "Each agent executes its task in the Minecraft world—mining, crafting, placing blocks—and reports back when done.",
    color: "stone",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">How It Works</h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            A simple loop: you give the goal, the system plans, agents execute. 
            No complex configuration needed.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              <div className="flex gap-6 items-start">
                {/* Step number line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-sm flex items-center justify-center border-2 ${
                      step.color === "grass"
                        ? "bg-grass/10 border-grass/30"
                        : step.color === "oak"
                        ? "bg-oak/10 border-oak/30"
                        : "bg-stone/10 border-stone/30"
                    }`}
                  >
                    <step.icon
                      className={`w-5 h-5 ${
                        step.color === "grass"
                          ? "text-grass"
                          : step.color === "oak"
                          ? "text-oak"
                          : "text-stone"
                      }`}
                    />
                  </div>
                  {index < steps.length - 1 && <div className="step-connector" />}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="text-xs font-bold text-muted-foreground mb-1">
                    STEP {step.step}
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flow diagram */}
        <motion.div
          className="mt-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="mc-panel p-6 flex items-center justify-center gap-4 flex-wrap">
            <div className="px-4 py-2 bg-grass/20 border border-grass/30 rounded-sm text-sm font-medium text-foreground">
              Player Goal
            </div>
            <div className="text-muted-foreground">→</div>
            <div className="px-4 py-2 bg-oak/20 border border-oak/30 rounded-sm text-sm font-medium text-foreground">
              Orchestrator
            </div>
            <div className="text-muted-foreground">→</div>
            <div className="px-4 py-2 bg-stone/20 border border-stone/30 rounded-sm text-sm font-medium text-foreground">
              Agents
            </div>
            <div className="text-muted-foreground">→</div>
            <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-sm text-sm font-medium text-foreground">
              World Changes
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
