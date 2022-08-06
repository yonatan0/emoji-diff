import React, { ChangeEvent, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Menu from "./Menu";
import Stage from "./Stage";
import Progress from "./Progress";

const Container = styled.div(css`
  display: flex;
  width: 100%;
  height: 100%;
`);

const Board = ({ count }: { count: number }) => {
  const countPrecentage = (count * 100) / 10;
  return (
    <Container>
      <Stage />
      <Progress progress={countPrecentage} />
      <Stage />
    </Container>
  );
};

export default Board;
