import { useState } from "react";
import { Briefcase, Code, GraduationCap, Wrench, Heart, User, FolderOpen, Menu, X } from "lucide-react";

const navItems = [
  { id: "summary", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  // { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "softskills", label: "Interests", icon: Heart },
];

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <div className="no-print fixed right-4 bottom-4 z-50">
      {/* Navigation Panel */}
      <nav
        className={`absolute right-0 bottom-16 glass-card p-3 transition-all duration-300 origin-bottom-right ${
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex flex-col items-center gap-1 p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 min-w-[70px]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <item.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
              <span className="text-[10px] font-medium transition-all duration-300 group-hover:text-primary">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ boxShadow: "0 4px 20px hsl(var(--glow-primary))" }}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default NavLinks;
