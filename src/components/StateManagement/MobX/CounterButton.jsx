import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid lightgray;
  color: #fff;
  width: 12rem;
  height: 2rem;
  border-radius: 2px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ease 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Header = styled.p`
  font-size: 6rem;
  font-weight: 600;
`;

const CounterButton = observer(({ counter }) => {
  return (
    <Container>
      <Header>MobX</Header>
      <h1>You have clicked the button {counter.count} times.</h1>
      <Button onClick={() => counter.handleIncrement(1)}>Click</Button>
    </Container>
  );
});

export default CounterButton;
