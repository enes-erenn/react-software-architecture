import React, { lazy, Suspense } from "react";
import styled from "styled-components";

const One = lazy(() => import("./components/One"));
const Two = lazy(() => import("./components/Two"));
const Three = lazy(() => import("./components/Three"));

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

const Header = styled.p`
  font-size: 6rem;
  font-weight: 600;
`;

const Splitting = () => {
  return (
    <Container>
      <Header>Splitting</Header>
      <Suspense fallback={<p>Loading...</p>}>
        <One />
        <Two />
        <Three />
      </Suspense>
    </Container>
  );
};

export default Splitting;
