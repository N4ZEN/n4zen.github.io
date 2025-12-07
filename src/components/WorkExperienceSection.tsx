import { MapPin, Building2, Star } from "lucide-react";
import { workExperience } from "@/data/portfolioData";

const WorkExperienceSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="section-title">
        <Star className="w-5 h-5 text-primary" />
        Work Experience
      </h2>

      <div className="space-y-0">
        {workExperience.map((exp, index) => (
          <div
            key={exp.id}
            className="timeline-item animate-fade-up print-break-inside-avoid"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="glass-card p-5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    {exp.description && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 sm:min-w-fit">
                  <span className="text-sm font-medium text-foreground">
                    {exp.period}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;