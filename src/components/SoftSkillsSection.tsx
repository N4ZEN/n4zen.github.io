import { softSkills, interests } from "@/data/portfolioData";
import { Heart, Sparkles } from "lucide-react";

const SoftSkillsSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="section-title">About Me</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Soft Skills */}
        <div className="glass-card p-5 animate-fade-up print-break-inside-avoid">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Core Strengths</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div
          className="glass-card p-5 animate-fade-up print-break-inside-avoid"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground">Interests</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-accent/10 border border-accent/30 text-accent"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
