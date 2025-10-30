import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";

const Projects = () => {
  const projects = [
    {
      id: "sales-management",
      title: "Sales Management System",
      role: "Lead Developer",
      description: "Desktop-based sales and inventory management system built in Java, featuring modular design for managing products, suppliers, deliveries, and sales with file-based storage.",
      tags: ["Java", "Swing", "File I/O", "Desktop App"],
      gradient: "from-primary/20 to-accent/20",
    },
    {
      id: "klynx",
      title: "KLynx+: Health Records Platform",
      role: "Lead Developer (Website)",
      description: "Digital record management system modernizing healthcare operations in Barangay Health Centers with secure, centralized patient records and health monitoring.",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      gradient: "from-accent/20 to-primary/20",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-terminal-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold code-text neon-glow">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link 
                key={index} 
                to={`/project/${project.id}`}
                className="group"
              >
                <Card className="terminal-border bg-background hover:bg-primary/5 transition-all duration-300 h-full overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-accent text-sm code-text">{project.role}</span>
                        <h3 className="text-2xl font-bold code-text mt-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-terminal-bg text-xs code-text border border-primary/30 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-primary text-sm code-text">
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
