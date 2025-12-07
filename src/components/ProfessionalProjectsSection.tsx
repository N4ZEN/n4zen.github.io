import { useState } from "react";
import { ChevronDown, Briefcase, Star, Code2 } from "lucide-react";
import { professionalProjects, technicalProjects } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const ProfessionalProjectsSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [showTechnicalProjects, setShowTechnicalProjects] = useState(false);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="space-y-6">
      <h2 className="section-title">
        <Star className="w-5 h-5 text-primary" />
        Professional Projects
      </h2>

      <div className="space-y-0">
        {professionalProjects.map((project, index) => (
          <div
            key={project.id}
            className="timeline-item animate-fade-up print-break-inside-avoid"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div onClick={() => toggleExpand(project.id)} className="glass-card-hover p-5 cursor-pointer relative">
              {/* Expand indicator - top right */}
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-muted-foreground transition-transform duration-300 absolute top-4 right-4 no-print",
                  expandedId === project.id && "rotate-180",
                )}
              />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pr-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{project.name}</h3>
                    <p className="text-primary font-medium text-sm">{project.role}</p>
                    <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Expandable content */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 print:!max-h-none print:!mt-4 print:!overflow-visible",
                  expandedId === project.id ? "max-h-[600px] mt-4" : "max-h-0",
                )}
              >
                <ul className="space-y-2 pl-4 border-l-2 border-primary/30">
                  {project.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-foreground relative before:content-[''] before:absolute before:-left-[12px] before:top-2 before:w-2 before:h-2 before:bg-primary/50 before:rounded-full"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Selected Technical Projects - as last expandable item */}
        <div
          className="timeline-item animate-fade-up print-break-inside-avoid"
          style={{ animationDelay: `${professionalProjects.length * 0.1}s` }}
        >
          <div
            onClick={() => setShowTechnicalProjects(!showTechnicalProjects)}
            className="glass-card-hover p-5 cursor-pointer relative"
          >
            {/* Expand indicator - top right */}
            <ChevronDown
              className={cn(
                "w-4 h-4 text-muted-foreground transition-transform duration-300 absolute top-4 right-4 no-print",
                showTechnicalProjects && "rotate-180",
              )}
            />

            <div className="flex items-start gap-4 pr-6">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Selected Technical Projects</h3>
                <p className="text-primary font-medium text-sm">Freelance | 2019 - Present </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Various technical projects including OCR modules, offline-first architecture, native UI components,
                  and ML models.
                </p>
              </div>
            </div>

            {/* Expandable content - Technical Projects */}
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 print:!max-h-none print:!mt-4 print:!overflow-visible",
                showTechnicalProjects ? "max-h-[800px] mt-4" : "max-h-0",
              )}
            >
              <div className="space-y-3 pl-4 border-l-2 border-primary/30">
                {technicalProjects.map((project) => (
                  <div
                    key={project.id}
                    className="relative before:content-[''] before:absolute before:-left-[9px] before:top-3 before:w-2 before:h-2 before:bg-primary/50 before:rounded-full"
                  >
                    <h4 className="font-medium text-foreground text-sm">{project.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProjectsSection;
