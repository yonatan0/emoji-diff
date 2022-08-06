export type GameStatusType = "start" | "initial";
export type GameMenuState = "hidden" | "main";

export type GameContextType = {
  status: GameStatusType;
  setStatus: (status: GameStatusType) => void;

  menuState: GameMenuState;
  setMenuState: (state: GameMenuState) => void;
};
