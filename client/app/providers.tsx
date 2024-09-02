"use client";

import React from "react";
import ExpandContextProvider from "./(Context)/ExpandContext";
import UserContextProvider from "./(Context)/UserContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ExpandContextProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </ExpandContextProvider>
  );
};

export default Providers;
