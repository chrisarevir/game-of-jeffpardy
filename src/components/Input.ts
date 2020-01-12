import styled, { css } from "styled-components";

type InputVariant = "success" | "warning" | "error";

interface InputProps {
  dark?: boolean;
  variant?: InputVariant;
}

const Input = styled.input<InputProps>`
  background-clip: padding-box;
  border-image-outset: 2;
  border-image-repeat: stretch;
  border-image-slice: 2;
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
  border-image-width: 2;
  border-style: solid;
  border-width: 4px;
  margin: 4px;
  padding: 0.5rem 1rem;
  width: 100%;

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    border-image-repeat: space;
  }

  @supports (-moz-appearance: meterbar) {
    border-image-repeat: stretch;
  }

  ${({ dark }) =>
    dark &&
    css`
      background-color: #212529;
      border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
      color: #fff;
      outline-color: #e7e7e7;
    `}

  ${({ variant }) => {
    switch (variant) {
      case "success":
        return css`
          border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(146,204,65)" /></svg>');
          outline-color: #76c442;
        `;
      case "warning":
        return css`
          border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(247,213,29)" /></svg>');
          outline-color: #f2c409;
        `;
      case "error":
        return css`
          border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(231,110,85)" /></svg>');
          outline-color: #ce372b;
        `;
      default:
        return "";
    }
  }}
`;

export default Input;
