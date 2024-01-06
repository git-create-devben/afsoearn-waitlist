// pages/thank-you.js

import Link from 'next/link';
import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="flex items-center  justify-center  bg-black h-96">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-pcolor mb-4">Thank You!</h1>
        <p className="text-lg text-white opacity-80">
          We appreciate your interest. You will hear from us soon.
        </p>
        <button className='underline text-blue-200'><Link href="/">You can now go back</Link>  </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
