import { createContext, useState, useContext } from "react";
import { GameContextType, GameStatusType, GameMenuState } from "./types";

export const GameContext = createContext<GameContextType | null>(null);

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState<GameStatusType>("initial");
  const [menuState, setMenuState] = useState<GameMenuState>("main");

  return (
    <GameContext.Provider
      value={{ status, setStatus, menuState, setMenuState }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

export const useGame = () => useContext<GameContextType | null>(GameContext);
