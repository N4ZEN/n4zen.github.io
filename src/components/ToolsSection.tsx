import {
  Code,
  Atom,
  Figma,
  GitBranch,
  Container,
  Database,
  Smartphone,
  Apple,
} from "lucide-react";
import { tools } from "@/data/portfolioData";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="w-8 h-8" />,
  atom: <Atom className="w-8 h-8" />,
  figma: <Figma className="w-8 h-8" />,
  "git-branch": <GitBranch className="w-8 h-8" />,
  container: <Container className="w-8 h-8" />,
  database: <Database className="w-8 h-8" />,
  smartphone: <Smartphone className="w-8 h-8" />,
  apple: <Apple className="w-8 h-8" />,
};

const ToolsSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="section-title">Tools</h2>

      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {tools.map((tool, index) => (
          <div
            key={tool.name}
            className="tool-icon animate-fade-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="text-primary icon-glow">
              {iconMap[tool.icon] || <Code className="w-8 h-8" />}
            </div>
            <span className="text-xs text-center text-muted-foreground font-medium">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
