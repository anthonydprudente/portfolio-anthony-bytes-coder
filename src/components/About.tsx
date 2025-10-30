const About = () => {
  return (
    <section id="about" className="py-20 bg-terminal-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-accent code-text text-sm">$ cat about.txt</span>
            <h2 className="text-4xl md:text-5xl font-bold code-text neon-glow mt-2">
              About Me
            </h2>
          </div>
          
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <div className="terminal-border p-6 bg-background/50">
              <p className="text-lg">
                I'm an aspiring developer currently pursuing a degree in Information Technology, 
                with a strong interest in <span className="text-primary">full-stack development</span> and{" "}
                <span className="text-primary">system design</span>. I enjoy building projects that are not only 
                functional but also thoughtfully structured and easy to maintain.
              </p>
            </div>
            
            <div className="terminal-border p-6 bg-background/50">
              <p className="text-lg">
                I'm driven by the challenge of turning ideas into clean, purposeful code that solves 
                real problems and improves user experiences. Whether it's a frontend interface or 
                backend logic, I approach every task with <span className="text-accent">curiosity</span>,{" "}
                <span className="text-accent">clarity</span>, and a commitment to{" "}
                <span className="text-accent">continuous learning</span>.
              </p>
            </div>

            <div className="terminal-border p-6 bg-background/50">
              <h3 className="text-xl font-bold text-primary mb-3 code-text">My Philosophy</h3>
              <p className="text-lg">
                I believe that great development starts with clean architecture and ends with a 
                seamless user experience. I write modular, readable code that's easy to maintain and 
                built with long-term clarity in mind. I prioritize <span className="text-primary">accessibility</span>,{" "}
                <span className="text-primary">performance</span>, and{" "}
                <span className="text-primary">purposeful design</span> in every project.
              </p>
              <p className="text-lg mt-4">
                As a communicator and team player, I enjoy collaborating across disciplines and 
                sharing what I learn with others—because good code should empower, not just execute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
