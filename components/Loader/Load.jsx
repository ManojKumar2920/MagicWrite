import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png'; // Adjust the path to your logo image

const Load = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" animate-spin duration-200 h-16 w-16">
        <Image src={logo} alt="Loading" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default Load;
