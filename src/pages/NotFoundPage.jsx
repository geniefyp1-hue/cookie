import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-9xl font-bold text-brand">404</h1>
      <h2 className="mt-4 text-4xl font-serif font-bold text-text-primary">Page Not Found</h2>
      <p className="mt-3 text-lg text-text-secondary">
        Oops! It seems like you've found a stray crumb. This page doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-brand hover:bg-brand-dark text-text-primary font-bold py-3 px-6 rounded-full transition-colors duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
