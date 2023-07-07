import React, { FC } from "react";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
