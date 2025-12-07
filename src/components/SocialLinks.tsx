import { Github, Linkedin, Mail, Twitter } from "lucide-react";

interface Social {
  platform: string;
  handle: string;
  url: string;
  icon: string;
}

interface SocialLinksProps {
  socials: Social[];
}

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
};

const SocialLinks = ({ socials }: SocialLinksProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Socials
      </h3>
      <div className="space-y-3">
        {socials.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link text-sm group"
          >
            <span className="text-primary group-hover:scale-110 transition-transform duration-200">
              {iconMap[social.icon] || <Globe className="w-5 h-5" />}
            </span>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-xs">{social.platform}</span>
              <span className="text-foreground font-medium">@{social.handle}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

import { Globe } from "lucide-react";

export default SocialLinks;
