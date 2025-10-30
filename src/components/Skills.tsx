import { Code2, Database, Server, GitBranch, MessageSquare, Users, Brain, Zap } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Python"], icon: Code2 },
    { category: "Backend", skills: ["Node.js", "PHP", "Express.js"], icon: Server },
    { category: "Databases", skills: ["SQL", "MongoDB", "Firebase"], icon: Database },
    { category: "DevOps & Tools", skills: ["Docker", "Git", "GitHub", "VS Code"], icon: GitBranch },
    { category: "Currently Exploring", skills: ["TypeScript", "Next.js", "API Integration"], icon: Zap },
  ];

  const softSkills = [
    { name: "Clear Communicator", description: "Explains technical concepts to non-technical audiences", icon: MessageSquare },
    { name: "Team Player", description: "Thrives in agile environments and cross-functional teams", icon: Users },
    { name: "Analytical Thinker", description: "Breaks down complex problems into manageable components", icon: Brain },
    { name: "Adaptability", description: "Learns new frameworks and tools quickly", icon: Zap },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-accent code-text text-sm">$ ls -la ./skills</span>
            <h2 className="text-4xl md:text-5xl font-bold code-text neon-glow mt-2">
              Skills & Expertise
            </h2>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 code-text">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className="terminal-border p-6 bg-terminal-bg hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
                      <h4 className="font-bold text-lg code-text">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((item, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-background text-xs code-text border border-primary/30 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 code-text">Soft Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className="terminal-border p-6 bg-terminal-bg hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="w-6 h-6 text-accent group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2 code-text">{skill.name}</h4>
                        <p className="text-muted-foreground text-sm">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="mt-12 terminal-border p-8 bg-terminal-bg text-center">
            <h3 className="text-2xl font-bold text-primary mb-4 code-text">Services Offered</h3>
            <p className="text-muted-foreground mb-6">Freelance Development Work</p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="neon-border px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary transition-all code-text"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
