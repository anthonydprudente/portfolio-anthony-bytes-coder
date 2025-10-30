import { GraduationCap, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Education = () => {
  const education = [
    {
      institution: "Polytechnic University of the Philippines San Juan Campus",
      level: "College",
      years: "2021 - Present",
    },
    {
      institution: "San Juan National Senior High School",
      level: "Senior High School",
      years: "2019 - 2021",
    },
    {
      institution: "San Juan National High School",
      level: "Junior High School",
      years: "2015 - 2019",
    },
    {
      institution: "Kabayanan Elementary School",
      level: "Elementary",
      years: "2009 - 2015",
    },
  ];

  const certifications = [
    "Cyber Threat Management by Cisco Networking Academy",
    "Introduction to Cybersecurity by Cisco Networking Academy",
    "Networking Basics by Cisco Networking Academy",
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold code-text neon-glow">
              Education & Certifications
            </h2>
          </div>

          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="education" className="code-text flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </TabsTrigger>
              <TabsTrigger value="certifications" className="code-text flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="space-y-4">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="terminal-border p-6 bg-terminal-bg hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold">{edu.institution}</h4>
                      <p className="text-primary code-text text-sm">{edu.level}</p>
                    </div>
                    <span className="text-accent text-sm code-text">{edu.years}</span>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="certifications" className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="terminal-border p-6 bg-terminal-bg hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full group-hover:animate-glow-pulse" />
                    <p className="text-lg">{cert}</p>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Education;
