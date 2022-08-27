import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  color: #fff;
  background-color: rgb(255, 255, 255, 0.03);
  border-radius: 8rem;
  padding: 5rem;
  font-size: 6rem;
  position: absolute;
  font-size: 12rem;
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgb(255, 255, 255, 0);
  transition: all ease 0.3s;
  ::selection {
    background: #000814;
  }
  &:hover {
    border: 1px solid rgb(255, 255, 255, 0.1);
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

const Home = () => {
  return <Header>Home</Header>;
};

export default Home;
