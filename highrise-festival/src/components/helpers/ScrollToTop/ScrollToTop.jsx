import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", //   instant
    });
  }, [pathname]);

  return null;
}
