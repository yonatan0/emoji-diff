import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Gradient from "javascript-color-gradient";

const gradientArray = new Gradient()
  .setColorGradient("#ff0000", "#00ff00")
  .setMidpoint(10)
  .getColors();

const Container = styled.div(css`
  display: flex;
  align-items: flex-end;
  width: 50px;
  height: 100%;
`);
const Bar = styled.div<{ progress: number }>(
  ({ progress = 100 }) => css`
    background-color: ${gradientArray[Math.floor(progress / 10) - 1]};
    width: 100%;
    height: ${progress}%;
  `
);
const Progress = ({
  progress,
  className
}: {
  progress: number;
  className?: string;
}) => {
  console.log({ progress });

  return (
    <Container className={className}>
      <Bar progress={progress} />
    </Container>
  );
};

export default Progress;
