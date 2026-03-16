const Footer = () => (
  <footer className="py-12 border-t border-border text-center">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-muted-foreground text-sm">© 2024 Wesly Jasper. Built with precision.</p>
      <div className="flex gap-6">
        <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors text-sm">
          GitHub
        </a>
        <a href="#" className="text-muted-foreground hover:text-secondary-foreground transition-colors text-sm">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
