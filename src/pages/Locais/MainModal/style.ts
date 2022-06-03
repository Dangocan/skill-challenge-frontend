import styled from "styled-components";

export const StyledMainModal = styled.div`
  border: 1px solid red;
  width: 50%;
  min-width: 300px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  padding: 1em;
`;

export const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
