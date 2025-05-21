export const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 py-6 mt-10 sticky bottom-0">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sid Consult. All rights reserved.
          </p>
          <div className="mt-2 space-x-4" >
            <a href="mailto:sidneylaryea@yahoo.com" className="hover:text-white transition-colors">
              📧 Email
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  };