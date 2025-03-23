import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Image
        src="/assets/icons/slack-icon.svg"
        height={20}
        width={20}
        alt="logo"
      />
    </div>
  );
};

export default Navbar;
