import { useCountdown } from "usehooks-ts";

import Menu from "./components/Menu";
import Board from "./components/Board";

import { useGame } from "./common/context";

import "reset-css";
import "./styles.css";

export default function App() {
  const game = useGame();

  const [
    count,
    { startCountdown, stopCountdown, resetCountdown }
  ] = useCountdown({
    countStart: 10,
    intervalMs: 1000
  });

  const startGameHandler = () => {
    game?.setMenuState("hidden");
    startCountdown();
  };

  return (
    <>
      <Menu onGameStartClick={startGameHandler} />
      <Board count={count} />
    </>
  );
}
