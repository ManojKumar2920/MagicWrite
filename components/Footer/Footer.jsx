import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" flex items-center justify-center text-center p-10">
      <div>
        <Link
          href={"https://www.producthunt.com/posts/magicwrite?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-magicwrite"}
          target="_blank"
          className=" p-2"
        >
          <img
            src={"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=471583&theme=light"}
            alt="MagicWrite - Bring&#0032;the&#0032;magic&#0032;into&#0032;your&#0032;words&#0032;with&#0032;MagicWrite&#0033; | Product Hunt"
            style={{width:'200px', height: '50px'}}
            width="250"
            height="54"
          />
        </Link>
        <p className=" font-medium text-sm">Designed & Developed by</p>
        <h1 className=" font-bold text-3xl bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          Manoj Kumar
        </h1>
      </div>
    </div>
  );
};

export default Footer;
