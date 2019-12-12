import React from "react";
import styled, { css } from "styled-components";
import Button from "./Button";

interface DialogProps {
  rounded?: boolean;
}

const Dialog = styled.section<DialogProps>`
  background: #fff;
  border-style: solid;
  border-width: 4px;
  margin: 20% 35%;
  padding: 1.5rem 2rem;
  position: absolute;
  width: 30%;
  z-index: 2;
  &::-webkit-backdrop {
    background-color: rgba(0, 0, 0, 0.3);
  }
  ${({ rounded }) =>
    rounded &&
    css`
      border-image-slice: 3;
      border-image-width: 3;
      border-image-repeat: stretch;
      border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
      border-image-outset: 2;

      @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
        border-image-repeat: space;
      }

      @supports (-moz-appearance: meterbar) {
        border-image-repeat: stretch;
      }
    `}
`;

// const Dialog = () => (
//   <section>
//     <dialog className="nes-dialog is-rounded" style id="dialog-rounded">
//       <form method="dialog">
//         <p className="title">Rounded dialog</p>
//         <p>Alert: this is a dialog.</p>
//         <menu className="dialog-menu">
//           <button className="nes-btn">Cancel</button>
//           <button className="nes-btn is-primary">Confirm</button>
//         </menu>
//       </form>
//     </dialog>
//   </section>
// );

export default Dialog;
