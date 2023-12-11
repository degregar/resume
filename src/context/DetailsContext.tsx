import React, { useState } from "react"

const DETAILS_MODES = {
  full: "full",
  standard: "standard",
  basic: "basic",
  minimal: "minimal",
}

type DetailsContextType = {
  mode: string
  setMode: (mode: string) => void
}

export const DetailsContext = React.createContext<DetailsContextType>({ mode: DETAILS_MODES.standard, setMode: () => {} })

const DetailsContextProvider = ({ mode: newMode = DETAILS_MODES.standard, ...params }) => {
  const [mode, setMode] = useState(newMode)

  return (
    <DetailsContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {params.children}
    </DetailsContext.Provider>
  )
}

export { DETAILS_MODES, DetailsContext as default, DetailsContextProvider }
