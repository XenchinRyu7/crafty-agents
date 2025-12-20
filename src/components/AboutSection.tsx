import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Pickaxe, Wrench, Building2 } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-card/50" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About the Mod</h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            AgentCraft is an experiment in automation and collaboration within Minecraft. 
            Instead of scripted behaviors, each agent reasons about its tasks and coordinates 
            with others to achieve your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Pickaxe,
              title: "Sandbox Experimentation",
              description:
                "Test how autonomous agents navigate and interact with Minecraft's open world. Every playthrough is different.",
              color: "grass",
            },
            {
              icon: Wrench,
              title: "Player-Driven Goals",
              description:
                "You set the objectives. Agents decide how to accomplish them—what to gather, what to craft, where to build.",
              color: "oak",
            },
            {
              icon: Building2,
              title: "Emergent Collaboration",
              description:
                "Watch agents divide tasks, share resources, and work together without explicit programming for each scenario.",
              color: "stone",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="mc-panel p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <div
                className={`w-12 h-12 rounded-sm flex items-center justify-center mb-4 ${
                  item.color === "grass"
                    ? "bg-grass/20"
                    : item.color === "oak"
                    ? "bg-oak/20"
                    : "bg-stone/20"
                }`}
              >
                <item.icon
                  className={`w-6 h-6 ${
                    item.color === "grass"
                      ? "text-grass"
                      : item.color === "oak"
                      ? "text-oak"
                      : "text-stone"
                  }`}
                />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
