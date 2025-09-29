const Footer = () => {
  return (
    <footer className="border-t border-base-300 bg-base-100/80 backdrop-blur h-14 flex items-center">
      <div className="container mx-auto px-4 text-sm text-base-content/70">
        © {new Date().getFullYear()} GyãnSetu — Built by Akbari Prayag and Team
      </div>
    </footer>
  );
};

export default Footer;


