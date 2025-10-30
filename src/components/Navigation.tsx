import { Link, useLocation } from "react-router-dom";
import { Code2, User, Briefcase, Mail, GraduationCap } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { to: "/", label: "Home", icon: Code2 },
    { to: "#about", label: "About", icon: User },
    { to: "#skills", label: "Skills", icon: Briefcase },
    { to: "#projects", label: "Projects", icon: Briefcase },
    { to: "#education", label: "Education", icon: GraduationCap },
    { to: "#contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/${id}`;
    } else {
      const element = document.querySelector(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold code-text neon-glow">
            &lt;AP /&gt;
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const Icon = link.icon;
              const isHome = link.to === "/";
              
              return isHome ? (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.to}
                  onClick={() => scrollToSection(link.to)}
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
