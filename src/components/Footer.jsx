import React from 'react';
import { Cookie } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface shadow-inner mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-text-secondary">
        <div className="flex justify-center items-center space-x-2 mb-2">
          <Cookie className="h-6 w-6 text-brand" />
          <p className="font-serif text-lg">Cookie Crumbs</p>
        </div>
        <p>&copy; {new Date().getFullYear()} Cookie Crumbs. All Rights Reserved.</p>
        <p className="text-sm mt-1">Baked with ❤️ in React.</p>
      </div>
    </footer>
  );
};

export default Footer;
