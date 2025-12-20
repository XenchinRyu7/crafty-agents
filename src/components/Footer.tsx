import { Github, BookOpen, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Documentation</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Discord</span>
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border" />
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-grass/40 rounded-sm" />
              <div className="w-2 h-2 bg-oak/40 rounded-sm" />
              <div className="w-2 h-2 bg-stone/40 rounded-sm" />
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Bottom */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              AgentCraft is an open-source experiment. Not affiliated with Mojang or Microsoft.
            </p>
            <p className="text-xs text-muted-foreground/70">
              Built by the community, for the community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
