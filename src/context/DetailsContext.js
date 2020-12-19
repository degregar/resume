import React, { useState } from "react";

export const DetailsContext = React.createContext();

const DETAILS_MODES = {
  full: "full",
  standard: "standard",
  basic: "basic",
  minimal: "minimal",
};

const DetailsContextProvider = ({
  mode: newMode = DETAILS_MODES.full,
  children,
}) => {
  const [mode, setMode] = useState(newMode);

  return (
    <DetailsContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export { DETAILS_MODES, DetailsContext as default, DetailsContextProvider };
