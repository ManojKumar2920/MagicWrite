import Link from "next/link";
import React from "react";
import Signature from '@/assets/signature.png'
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" flex items-center justify-center text-center p-10">
      <div className=" flex flex-col gap-2 items-center justify-center">
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
        <div className=" flex items-center justify-center">
          <Image src={Signature} width={400} height={400} className=" select-none" alt="Signature"></Image>
        </div>
      </div>
    </div>
  );
};

export default Footer;
