"use client";

import React from "react";
import ExpandContextProvider from "./(Context)/ExpandContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ExpandContextProvider>{children}</ExpandContextProvider>;
};

export default Providers;
