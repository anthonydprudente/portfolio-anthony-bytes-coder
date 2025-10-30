const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground code-text text-sm">
            © {new Date().getFullYear()} Anthony Prudente. Built with React & TypeScript
          </p>
          <p className="text-accent code-text text-xs mt-2">
            $ echo "Thanks for visiting!"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
