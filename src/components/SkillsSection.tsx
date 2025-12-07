import { skills } from "@/data/portfolioData";
import { Code, Brain, Server, Cloud, Database, Layers } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Mobile Development": <Code className="w-4 h-4" />,
  "Machine Learning & AI": <Brain className="w-4 h-4" />,
  "Backend & Full Stack": <Server className="w-4 h-4" />,
  "Cloud & DevOps": <Cloud className="w-4 h-4" />,
  "Databases": <Database className="w-4 h-4" />,
  "Architecture & State Management": <Layers className="w-4 h-4" />,
};

const SkillsSection = () => {
  const skillEntries = Object.entries(skills);
  
  return (
    <section className="space-y-6">
      <h2 className="section-title">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillEntries.map(([category, skillList], categoryIndex) => (
          <div
            key={category}
            className="glass-card p-4 animate-fade-up print-break-inside-avoid"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {categoryIcons[category] || <Code className="w-4 h-4" />}
              </div>
              <h3 className="font-semibold text-foreground text-sm">{category}</h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {skillList.map((skill, index) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;