"use client";

import classNames from "classnames";
import { useState } from "react";

const NavbarMobile = () => {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };
  return (
    <div
      className={classNames(`tham tham-e-squeeze tham-w-6 sm:hidden`, {
        "tham-active": opened,
      })}
      onClick={toggleMenu}
    >
      <div className="tham-box">
        <div className="tham-inner" />
      </div>
    </div>
  );
};

export default NavbarMobile;
