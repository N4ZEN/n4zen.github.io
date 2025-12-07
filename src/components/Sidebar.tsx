import { Mail, Phone, MapPin, Globe, Download } from "lucide-react";
import { personalInfo, socials, languages } from "@/data/portfolioData";
import SocialLinks from "./SocialLinks";

interface SidebarProps {
  onDownloadPDF: () => void;
}

const Sidebar = ({ onDownloadPDF }: SidebarProps) => {
  return (
    <aside className="lg:w-80 xl:w-96 bg-sidebar p-6 lg:p-8 lg:min-h-screen border-r border-sidebar-border">
      <div className="sticky top-6 space-y-8">
        {/* Profile Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-display font-bold text-foreground">{personalInfo.name}</h1>
          <p className="text-primary font-medium mt-1">{personalInfo.role}</p>
          <p className="text-muted-foreground text-sm mt-1">{personalInfo.tagline}</p>
        </div>

        {/* Quote */}
        <blockquote className="relative pl-4 border-l-2 border-primary/50 italic text-muted-foreground text-sm">
          <span className="text-primary text-2xl absolute -left-0.2 -top-2">"</span> {personalInfo.quote}
          <span className="text-primary text-2xl">"</span>
        </blockquote>

        {/* Download CV Button */}
        <button
          onClick={onDownloadPDF}
          className="no-print w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover:scale-[1.02]"
        >
          <Download className="w-4 h-4" />
          Download CV (PDF)
        </button>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contact</h3>
          <div className="space-y-3">
            <a href={`mailto:${personalInfo.email}`} className="sidebar-link text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <span className="truncate">{personalInfo.email}</span>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="sidebar-link text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span>{personalInfo.phone}</span>
            </a>
            <a
              href={`https://${personalInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-link text-sm"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span>{personalInfo.website}</span>
            </a>
            <div className="sidebar-link text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Socials */}
        <SocialLinks socials={socials} />

        {/* Languages */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Languages</h3>
          <div className="space-y-2">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-3 text-sm text-foreground">
                <span className="text-xl">{lang.flag}</span>
                <div>
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-muted-foreground ml-2">({lang.level})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
