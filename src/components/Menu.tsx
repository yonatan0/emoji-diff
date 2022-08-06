import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useGame } from "../common/context";

const Container = styled.div(css`
  position: absolute;
  inset: 0 0 0 0;
`);

const CardWrapper = styled.div(css`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
`);

const Card = styled.div(css`
  display: flex;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.4);
`);

const Button = styled.button(css`
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
  border-radius: 10px;

  &:hover&:active {
    background-color: #000;
    color: #eee;
    color: green;
  }
  /* &:focus, */
`);

const Menu = ({ onGameStartClick }: { onGameStartClick: () => void }) => {
  const game = useGame();
  if (game?.menuState === "hidden") {
    return null;
  }
  return (
    <Container>
      <CardWrapper>
        <Card>
          <Button
            onClick={() => {
              onGameStartClick();
            }}
          >
            Start {game?.status}
          </Button>
        </Card>
      </CardWrapper>
    </Container>
  );
};

export default Menu;
