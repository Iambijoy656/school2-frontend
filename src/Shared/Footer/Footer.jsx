import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";

const Footer = () => {
    const { data: footerData = [], isLoading } = useQuery({
        queryKey: ["footerData"],
        queryFn: async () => {
          const response = await fetch("/footerData.json");
          const data = await response.json();
    
          return data;
        },
      });
    
      console.log(footerData[0]);
    
      if (isLoading && !footerData.length) return <Loading />;
  return (
    <footer className="p-6 bg-[#e8eded] ">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-5">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Getting started</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Installation
            </a>
            <a rel="noopener noreferrer" href="#">
              Release Notes
            </a>
            <a rel="noopener noreferrer" href="#">
              Upgrade Guide
            </a>
            <a rel="noopener noreferrer" href="#">
              Using with Preprocessors
            </a>
            <a rel="noopener noreferrer" href="#">
              Optimizing for Production
            </a>
            <a rel="noopener noreferrer" href="#">
              Browser Support
            </a>
            <a rel="noopener noreferrer" href="#">
              IntelliSense
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Core Concepts</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Utility-First
            </a>
            <a rel="noopener noreferrer" href="#">
              Responsive Design
            </a>
            <a rel="noopener noreferrer" href="#">
              Hover, Focus, &amp; Other States
            </a>
            <a rel="noopener noreferrer" href="#">
              Dark Mode
            </a>
            <a rel="noopener noreferrer" href="#">
              Adding Base Styles
            </a>
            <a rel="noopener noreferrer" href="#">
              Extracting Components
            </a>
            <a rel="noopener noreferrer" href="#">
              Adding New Utilities
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Customization</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Configuration
            </a>
            <a rel="noopener noreferrer" href="#">
              Theme Configuration
            </a>
            <a rel="noopener noreferrer" href="#">
              Breakpoints
            </a>
            <a rel="noopener noreferrer" href="#">
              Customizing Colors
            </a>
            <a rel="noopener noreferrer" href="#">
              Customizing Spacing
            </a>
            <a rel="noopener noreferrer" href="#">
              Configuring Variants
            </a>
            <a rel="noopener noreferrer" href="#">
              Plugins
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Community</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <a rel="noopener noreferrer" href="#">
              GitHub
            </a>
            <a rel="noopener noreferrer" href="#">
              Discord
            </a>
            <a rel="noopener noreferrer" href="#">
              Twitter
            </a>
            <a rel="noopener noreferrer" href="#">
              YouTube
            </a>
          </div>
        </div> <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Community</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <a rel="noopener noreferrer" href="#">
              GitHub
            </a>
            <a rel="noopener noreferrer" href="#">
              Discord
            </a>
            <a rel="noopener noreferrer" href="#">
              Twitter
            </a>
            <a rel="noopener noreferrer" href="#">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        <span className="text-gray-400">
          © Copyright 1986. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
