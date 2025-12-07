import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "@/data/portfolioData";

const EducationSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="section-title">Education</h2>

      <div className="grid gap-4">
        {education.map((edu, index) => (
          <div
            key={edu.institution}
            className="glass-card-hover p-5 animate-fade-up print-break-inside-avoid"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
