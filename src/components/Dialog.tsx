import React from "react";

import styled, { css } from "styled-components";

interface DialogProps {
  rounded?: boolean;
  selectedDate?: Date;
}

const Dialog = styled.section<DialogProps>`
  background: #fff;
  border-style: solid;
  border-width: 4px;
  display: flex;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 20vh;
  max-height: 80vh;
  max-width: 700px;
  padding: 1.5rem 2rem;
  position: absolute;
  z-index: 2;

  input {
    margin-right: 1rem;
    max-width: 75%;
  }

  ${({ rounded }) =>
    rounded &&
    css`
      border-image-outset: 2;
      border-image-repeat: stretch;
      border-image-slice: 3;
      border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
      border-image-width: 3;

      @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
        border-image-repeat: space;
      }

      @supports (-moz-appearance: meterbar) {
        border-image-repeat: stretch;
      }
    `}
`;

const Shim = styled.div`
  background: black;
  height: 100vh;
  opacity: 0.5;
  position: absolute;
  width: 100vw;
  z-index: 1;
`;

interface ModalProps extends DialogProps {
  onClickOutside?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  onClickOutside,
  rounded
}) => {
  return (
    <>
      <Shim onClick={onClickOutside} />
      <Dialog rounded={rounded}>{children}</Dialog>
    </>
  );
};

export default Modal;
