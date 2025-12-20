import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Hammer, Landmark } from "lucide-react";

const agents = [
  {
    icon: Gem,
    name: "Gatherer",
    color: "grass",
    skills: ["Mining", "Harvesting", "Inventory Management"],
    description:
      "Explores the world to collect resources. Knows where to find ores, trees, and other materials. Prioritizes based on current needs and returns resources to a central location.",
    behavior: "Wanders, mines, harvests, deposits",
  },
  {
    icon: Hammer,
    name: "Crafter",
    color: "oak",
    skills: ["Recipe Knowledge", "Tool Creation", "Material Processing"],
    description:
      "Transforms raw materials into useful items. Understands crafting recipes and dependencies. Can queue up complex multi-step crafting chains.",
    behavior: "Checks inventory, crafts items, manages recipes",
  },
  {
    icon: Landmark,
    name: "Builder",
    color: "stone",
    skills: ["Structure Planning", "Block Placement", "Spatial Reasoning"],
    description:
      "Places blocks to create structures. Can follow blueprints or improvise based on available materials. Handles walls, floors, roofs, and functional builds.",
    behavior: "Plans layout, places blocks, builds structures",
  },
];

const AgentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agents" className="py-24 bg-card/50" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">The Agents</h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Three specialized agents, each with their own role. Together, they can accomplish 
            complex goals that no single agent could handle alone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              className="agent-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-sm flex items-center justify-center ${
                    agent.color === "grass"
                      ? "bg-grass/20 border border-grass/30"
                      : agent.color === "oak"
                      ? "bg-oak/20 border border-oak/30"
                      : "bg-stone/20 border border-stone/30"
                  }`}
                >
                  <agent.icon
                    className={`w-7 h-7 ${
                      agent.color === "grass"
                        ? "text-grass"
                        : agent.color === "oak"
                        ? "text-oak"
                        : "text-stone"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground">{agent.name}</h3>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    {agent.behavior}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {agent.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {agent.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-xs font-medium rounded-sm ${
                      agent.color === "grass"
                        ? "bg-grass/10 text-grass border border-grass/20"
                        : agent.color === "oak"
                        ? "bg-oak/10 text-oak border border-oak/20"
                        : "bg-stone/10 text-stone border border-stone/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
