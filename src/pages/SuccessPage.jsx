import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const SuccessPage = () => {
  return (
    <div className="text-center py-20 bg-surface rounded-lg shadow-lg">
      <CheckCircle className="mx-auto h-20 w-20 text-green-500" />
      <h1 className="mt-6 text-4xl font-serif font-bold text-text-primary">Thank You For Your Order!</h1>
      <p className="mt-3 text-lg text-text-secondary">
        Your cookies are being baked and will be shipped soon.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-brand hover:bg-brand-dark text-text-primary font-bold py-3 px-6 rounded-full transition-colors duration-300"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default SuccessPage;
