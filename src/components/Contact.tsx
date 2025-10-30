import { useState } from "react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-terminal-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold code-text neon-glow">
              Get In Touch
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="terminal-border p-6 bg-background">
                <h3 className="text-xl font-bold text-primary mb-6 code-text">Contact Information</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:anthonyprudente1@gmail.com"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 text-accent" />
                    <span>anthonyprudente1@gmail.com</span>
                  </a>
                  
                  <a 
                    href="https://github.com/ItsMeAnthonyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5 text-accent" />
                    <span>github.com/ItsMeAnthonyy</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/anthony-prudente-aa1562386"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-accent" />
                    <span>Anthony Prudente</span>
                  </a>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>Manila, Philippines</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="terminal-border p-6 bg-background">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm code-text text-accent mb-2 block">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-terminal-bg border-primary/30"
                  />
                </div>
                
                <div>
                  <label className="text-sm code-text text-accent mb-2 block">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-terminal-bg border-primary/30"
                  />
                </div>
                
                <div>
                  <label className="text-sm code-text text-accent mb-2 block">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-terminal-bg border-primary/30"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full neon-border bg-primary/10 hover:bg-primary/20 text-primary"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
