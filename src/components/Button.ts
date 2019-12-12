import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "success" | "warning" | "error" | "disabled";

interface ButtonProps {
  disabled?: boolean;
  variant?: ButtonVariant;
}

const Button = styled.button<ButtonProps>`
  background-color: #fff;
  border-image-outset: 2;
  border-image-repeat: stretch;
  border-image-slice: 2;
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
  border-image-width: 2;
  border-style: solid;
  border-width: 4px;
  color: #212529;
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
      14 0,
    pointer;
  display: inline-block;
  margin: 4px;
  padding: 6px 8px;
  position: relative;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  max-height: 48px;

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    border-image-repeat: space;
  }

  @supports (-moz-appearance: meterbar) {
    border-image-repeat: stretch;
  }

  &:active:not(.is-disabled)::after {
    box-shadow: inset 4px 4px #adafbc;
  }

  &:focus {
    box-shadow: 0 0 0 6px rgba(173, 175, 188, 0.3);
    outline: 0;
  }

  &:hover {
    color: #212529;
    text-decoration: none;
    background-color: #e7e7e7;

    &::after {
      box-shadow: inset -6px -6px #adafbc;
    }
  }

  &::after {
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    content: "";
    box-shadow: inset -4px -4px #adafbc;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      &,
      &:focus,
      &:hover {
        background-color: #d3d3d3;
        box-shadow: inset -4px -4px #adafbc;
        color: #212529;
        cursor: not-allowed;
        opacity: 0.6;
      }
    `}

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          color: #fff;
          background-color: #209cee;

          &::after {
            position: absolute;
            top: -4px;
            right: -4px;
            bottom: -4px;
            left: -4px;
            content: "";
            box-shadow: inset -4px -4px #006bb3;
          }

          &:hover {
            color: #fff;
            text-decoration: none;
            background-color: #108de0;
          }

          &:hover::after {
            box-shadow: inset -6px -6px #006bb3;
          }

          &:focus {
            box-shadow: 0 0 0 6px rgba(0, 107, 179, 0.3);
          }

          &:active:not(.is-disabled)::after {
            box-shadow: inset 4px 4px #006bb3;
          }
        `;
      case "success":
        return css`
          color: #fff;
          background-color: #92cc41;

          &::after {
            position: absolute;
            top: -4px;
            right: -4px;
            bottom: -4px;
            left: -4px;
            content: "";
            box-shadow: inset -4px -4px #4aa52e;
          }

          &:hover {
            color: #fff;
            text-decoration: none;
            background-color: #76c442;
          }

          &:hover::after {
            box-shadow: inset -6px -6px #4aa52e;
          }

          &:focus {
            box-shadow: 0 0 0 6px rgba(74, 165, 46, 0.3);
          }

          &:active:not(.is-disabled)::after {
            box-shadow: inset 4px 4px #4aa52e;
          }
        `;
      case "warning":
        return css`
          color: #212529;
          background-color: #f7d51d;

          &::after {
            position: absolute;
            top: -4px;
            right: -4px;
            bottom: -4px;
            left: -4px;
            content: "";
            box-shadow: inset -4px -4px #e59400;
          }

          &:hover {
            color: #212529;
            text-decoration: none;
            background-color: #f2c409;
          }

          &:hover::after {
            box-shadow: inset -6px -6px #e59400;
          }

          &:focus {
            box-shadow: 0 0 0 6px rgba(229, 148, 0, 0.3);
          }

          &:active:not(.is-disabled)::after {
            box-shadow: inset 4px 4px #e59400;
          }
        `;
      case "error":
        return css`
          color: #fff;
          background-color: #e76e55;

          &::after {
            position: absolute;
            top: -4px;
            right: -4px;
            bottom: -4px;
            left: -4px;
            content: "";
            box-shadow: inset -4px -4px #8c2022;
          }

          &:hover {
            color: #fff;
            text-decoration: none;
            background-color: #ce372b;
          }

          &:hover::after {
            box-shadow: inset -6px -6px #8c2022;
          }

          &:focus {
            box-shadow: 0 0 0 6px rgba(140, 32, 34, 0.3);
          }

          &:active:not(.is-disabled)::after {
            box-shadow: inset 4px 4px #8c2022;
          }
        `;
      default:
        return;
    }
  }}
`;

Button.displayName = "NES Button";

export default Button;
