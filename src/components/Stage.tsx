import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div(css`
  width: 100%;
  border: 3px solid blue;
`);

const Stage = () => {
  return <Container></Container>;
};

export default Stage;
