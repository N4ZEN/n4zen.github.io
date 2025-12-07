import { summary } from "@/data/portfolioData";
import ProfessionalProjectsSection from "./ProfessionalProjectsSection";
import WorkExperienceSection from "./WorkExperienceSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import ToolsSection from "./ToolsSection";
import SoftSkillsSection from "./SoftSkillsSection";

const MainContent = () => {
  return (
    <main className="flex-1 p-6 lg:p-10 space-y-12 max-w-4xl">
      {/* Summary */}
      <section id="summary" className="animate-fade-up scroll-mt-6">
        <div className="glass-card p-6">
          {/* <h2 className="section-title mb-4">Profile Summary</h2> */}
          <p className="text-muted-foreground italic leading-relaxed">{summary}</p>
        </div>
      </section>

      <section id="projects" className="scroll-mt-6">
        <ProfessionalProjectsSection />
      </section>

      {/* <section id="experience" className="scroll-mt-6">
        <WorkExperienceSection />
      </section> */}

      <section id="skills" className="scroll-mt-6">
        <SkillsSection />
      </section>

      <section id="education" className="scroll-mt-6">
        <EducationSection />
      </section>

      <section id="tools" className="scroll-mt-6">
        <ToolsSection />
      </section>

      <section id="softskills" className="scroll-mt-6">
        <SoftSkillsSection />
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-muted-foreground py-8 border-t border-border">
        <p>References available upon request</p>
        <p className="mt-2 no-print">© {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
};

export default MainContent;
