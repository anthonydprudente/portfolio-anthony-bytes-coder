import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projects: Record<string, any> = {
    "sales-management": {
      title: "Sales Management System",
      role: "Lead Developer",
      overview: "This desktop-based sales and inventory management system was developed as a hands-on learning project to help students gain practical experience with file handling, system logic, and team collaboration. Built entirely in Java, the application features a clean, modular interface for managing product categories, packaging, variants, suppliers, deliveries, orders, and sales.",
      problem: "Students often struggle to connect programming concepts to real-world applications. Without practical exposure, skills like file I/O, modular design, and collaborative development remain abstract and underutilized.",
      approach: "We used Java Swing to design the user interface and Java I/O to handle backend logic and data storage. Each module—such as Category, Packaging, Supplier Info, and Sales—was assigned to a team member, encouraging ownership and integration. Input validation, user feedback, and .txt file logging were implemented to reinforce core programming principles and ensure data traceability.",
      outcome: "The final system is a functional, maintainable desktop application that allows users to add, retrieve, and manage business records with ease. It strengthened our understanding of Java development, file-based data management, and collaborative workflows. The project also served as a showcase of clean code practices, purposeful design, and real-world problem solving.",
      techStack: [
        { label: "Frontend (GUI)", value: "Java Swing (for forms, buttons, dialogs, and user interface components)" },
        { label: "Backend (Logic)", value: "Java SE (Standard Edition) with Java I/O for file handling and business logic" },
        { label: "Database", value: "Flat file storage (.txt, .csv) or embedded database like SQLite" },
        { label: "Logging", value: "Java I/O (BufferedWriter, FileWriter) to write logs into .txt files manually" },
      ],
    },
    "klynx": {
      title: "KLynx+: Modernizing Barangay Medical Records",
      role: "Lead Developer (Website)",
      overview: "KLynx+ is a digital record management system developed to modernize healthcare operations in Barangay Health Centers. The system replaces traditional paper-based workflows with a secure, centralized platform for managing patient records, medical services, and health monitoring. Designed with accessibility, accuracy, and disaster resilience in mind, KLynx+ empowers healthcare workers to deliver faster, more reliable care while supporting disease tracking and data-driven decision-making.",
      problem: "Barangay Health Centers traditionally rely on manual, paper-based systems to record patient information. This method is slow, error-prone, and vulnerable to physical damage—especially during natural disasters like floods and typhoons. Retrieving or updating records requires time-consuming searches through filing cabinets, which reduces staff efficiency and compromises the quality of patient care.",
      approach: "KLynx+ was developed to address these challenges by introducing a digital solution tailored to local healthcare needs. The system features a secure, centralized database, automated data entry and record management, a modern intuitive user interface, role-based access, geographic disease tracking tools, and rigorous testing aligned with ISO/IEC 25010 software quality standards.",
      outcome: "The platform successfully digitized healthcare workflows, improving efficiency, accuracy, and disaster resilience for Barangay Health Centers. Staff can now access and update patient records instantly, reducing administrative burden and enabling better quality care.",
      techStack: [
        { label: "Web Interface", value: "React" },
        { label: "Mobile App", value: "React Native" },
        { label: "Server Logic", value: "Node.js, Express.js" },
        { label: "API Handling", value: "RESTful APIs via Express" },
        { label: "NoSQL Storage", value: "MongoDB" },
        { label: "SQL Management", value: "phpMyAdmin (for MySQL/MariaDB)" },
        { label: "Version Control", value: "Git, GitHub" },
      ],
    },
  };

  const project = projectId ? projects[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/#projects" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <div className="mb-8">
              <span className="text-accent code-text text-sm">{project.role}</span>
              <h1 className="text-4xl md:text-5xl font-bold code-text neon-glow mt-2">
                {project.title}
              </h1>
            </div>

            {/* Overview */}
            <div className="terminal-border p-6 bg-terminal-bg mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 code-text">Overview</h2>
              <p className="text-foreground/90 leading-relaxed">{project.overview}</p>
            </div>

            {/* Problem */}
            <div className="terminal-border p-6 bg-terminal-bg mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 code-text">Problem</h2>
              <p className="text-foreground/90 leading-relaxed">{project.problem}</p>
            </div>

            {/* Approach */}
            <div className="terminal-border p-6 bg-terminal-bg mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 code-text">Approach</h2>
              <p className="text-foreground/90 leading-relaxed">{project.approach}</p>
            </div>

            {/* Outcome */}
            <div className="terminal-border p-6 bg-terminal-bg mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 code-text">Outcome</h2>
              <p className="text-foreground/90 leading-relaxed">{project.outcome}</p>
            </div>

            {/* Tech Stack */}
            <div className="terminal-border p-6 bg-terminal-bg mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 code-text">Tech Stack</h2>
              <div className="space-y-4">
                {project.techStack.map((tech: any, index: number) => (
                  <div key={index} className="border-l-2 border-accent pl-4">
                    <h3 className="font-bold text-accent code-text text-sm">{tech.label}</h3>
                    <p className="text-foreground/90">{tech.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshots Note */}
            <div className="terminal-border p-6 bg-terminal-bg text-center">
              <p className="text-muted-foreground mb-4">
                Project screenshots and detailed documentation available
              </p>
              <Button className="neon-border bg-primary/10 hover:bg-primary/20 text-primary">
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Google Drive
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
