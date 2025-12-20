import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Moon, Utensils, Home, Sword } from "lucide-react";

const examples = [
  {
    icon: Moon,
    title: "Build a Shelter Before Night",
    goal: '"Build a simple shelter with a door and torches"',
    steps: [
      "Gatherer collects wood and coal",
      "Crafter makes planks, sticks, door, and torches",
      "Builder constructs a small enclosed structure",
      "Torches placed inside for light",
    ],
    color: "oak",
  },
  {
    icon: Utensils,
    title: "Prepare Food Automatically",
    goal: '"Get food ready for an expedition"',
    steps: [
      "Gatherer hunts animals and harvests wheat",
      "Crafter processes raw meat and bakes bread",
      "Cooked food stored in designated chest",
      "Ready for player to collect",
    ],
    color: "grass",
  },
  {
    icon: Sword,
    title: "Craft Combat Gear",
    goal: '"Prepare iron armor and weapons"',
    steps: [
      "Gatherer mines iron ore and coal",
      "Crafter smelts ore into ingots",
      "Crafter creates sword, pickaxe, armor pieces",
      "Equipment ready for the player",
    ],
    color: "stone",
  },
  {
    icon: Home,
    title: "Establish a Base",
    goal: '"Build a functional base with storage and crafting"',
    steps: [
      "Gatherer collects stone, wood, and materials",
      "Builder creates main room with stone walls",
      "Crafter makes chests, furnaces, crafting tables",
      "Functional base ready for use",
    ],
    color: "cobble",
  },
];

const ExamplesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getColorClasses = (color: string) => {
    switch (color) {
      case "grass":
        return {
          bg: "bg-grass/10",
          border: "border-grass/20",
          icon: "text-grass",
        };
      case "oak":
        return {
          bg: "bg-oak/10",
          border: "border-oak/20",
          icon: "text-oak",
        };
      case "stone":
        return {
          bg: "bg-stone/10",
          border: "border-stone/20",
          icon: "text-stone",
        };
      default:
        return {
          bg: "bg-cobble/10",
          border: "border-cobble/20",
          icon: "text-cobble",
        };
    }
  };

  return (
    <section id="examples" className="py-24" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Gameplay Examples</h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Here's what happens when you give the agents a goal. 
            Each scenario shows the natural coordination between agents.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {examples.map((example, index) => {
            const colors = getColorClasses(example.color);
            return (
              <motion.div
                key={example.title}
                className="mc-panel p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-10 h-10 rounded-sm flex items-center justify-center ${colors.bg} border ${colors.border}`}
                  >
                    <example.icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">
                      {example.title}
                    </h3>
                    <p className="text-sm text-muted-foreground italic">
                      {example.goal}
                    </p>
                  </div>
                </div>

                {/* Steps */}
                <ul className="space-y-2">
                  {example.steps.map((step, stepIndex) => (
                    <li
                      key={stepIndex}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span
                        className={`w-5 h-5 rounded-sm flex items-center justify-center text-xs font-medium ${colors.bg} ${colors.icon} shrink-0 mt-0.5`}
                      >
                        {stepIndex + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
