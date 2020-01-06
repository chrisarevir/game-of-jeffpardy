import React from "react";
import styled, { css } from "styled-components";
// import React from 'react'

type ContainerVariant = "center" | "right";

interface ContainerProps {
  dark?: boolean;
  title?: string;
  variant?: ContainerVariant;
  rounded?: boolean;
}

const ContainerContainer = styled.div<ContainerProps>`
  border-color: #000;
  border-style: solid;
  border-width: 4px;
  padding: 1.5rem 2rem;
  position: relative;

  ${({ variant }) => {
    if (variant && variant === "center") {
      return css`
        text-align: "center";

        & > .title {
          margin: -2rem auto 1rem;
        }
      `;
    }

    if (variant && variant === "right") {
      return css`
        text-align: "right";

        & > .title {
          margin: -2rem 0 1rem auto;
        }
      `;
    }
  }}

  ${({ title, dark, rounded, variant }) =>
    title &&
    css`
      & > .title {
        display: table;
        padding: 0 0.5rem;
        margin: -1.8rem 0 1rem;
        font-size: 1rem;
        background-color: #fff;
        color: #f5af6c;

        ${rounded &&
          css`
            margin-top: -1.5rem;

            ${variant &&
              variant === "center" &&
              css`
                margin: -1.5rem auto 1rem;
              `}

            ${variant &&
              variant === "right" &&
              css`
                margin: -1.5rem 0 1rem auto;
              `}

            ${dark &&
              css`
                margin-top: -1.3rem;

                ${variant &&
                  variant === "center" &&
                  css`
                    margin: -1.3rem auto 1rem;
                  `}

                ${variant &&
                  variant === "right" &&
                  css`
                    margin: -1.3rem 0 1rem auto;
                  `}
              `}

            
            
          `}
      }
    `}

  &:last-child {
    margin-bottom: 0;
  }

  ${({ dark, title }) =>
    dark &&
    css`
      margin: 4px;
      color: #f0f2f5;
      background-color: #212529;
      border-color: #fff;

      &::after {
        background-color: #212529;
        bottom: -7.2px;
        content: "";
        left: -7.2px;
        position: absolute;
        right: -7.2px;
        top: -7.2px;
        z-index: -1;
      }

      ${title &&
        css`
          & > .title {
            color: #f0f2f5;
            background-color: #212529;
          }
        `}
    `}

  ${({ rounded }) =>
    rounded &&
    css`
      border-image-outset: 2;
      border-image-repeat: stretch;
      border-image-slice: 3;
      border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
      border-image-width: 3;
      margin: 4px;
      padding: 1rem 1.5rem;

      @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
        border-image-repeat: space;
      }
      @supports (-moz-appearance: meterbar) {
        border-image-repeat: stretch;
      }
    `}

  ${({ dark, rounded }) =>
    dark &&
    rounded &&
    css`
      border-image-slice: 3;
      border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
      border-image-outset: 0;

      @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
        border-image-repeat: space;
      }
      @supports (-moz-appearance: meterbar) {
        border-image-repeat: stretch;
      }

      &::after {
        content: none;
      }
    `}

  & + & {
    margin-top: 24px;
  }
`;

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <ContainerContainer {...props}>
      {props.title && <p className="title">{props.title}</p>}
      {children}
    </ContainerContainer>
  );
};

export default Container;
