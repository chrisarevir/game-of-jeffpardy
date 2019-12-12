import styled, { css } from "styled-components";

type IconSizes = "sm" | "md" | "lg";

type IconIcons = "coin";

interface IconProps {
  icon: IconIcons;
  size?: IconSizes;
}

const Icon = styled.i<IconProps>`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  transform: scale(2);
  transform-origin: top left;

  ${({ size = "sm" }) => {
    if (size === "sm") {
      return css`
        margin: 0;
        transform: scale(1);
      `;
    }

    if (size === "md") {
      return css`
        margin-right: 32px;
        margin-bottom: 32px;
        transform: scale(3);
      `;
    }

    if (size === "lg") {
      return css`
        margin-right: 48px;
        margin-bottom: 48px;
        transform: scale(4);
      `;
    }
  }}

  &::before {
    position: absolute;
    top: -1px;
    left: -1px;
    display: block;
    content: "";
    background: 0 0;
  }

  ${({ icon }) =>
    icon &&
    icon === "coin" &&
    css`
      &::before {
        width: 1px;
        height: 1px;
        color: #ffc107;
        box-shadow: 6px 1px #060606, 7px 1px #060606, 8px 1px #060606,
          9px 1px #060606, 10px 1px #060606, 11px 1px #060606, 4px 2px #060606,
          5px 2px #060606, 6px 2px #060606, 7px 2px #fff, 8px 2px #fff,
          9px 2px #fff, 10px 2px #060606, 11px 2px #060606, 12px 2px #060606,
          13px 2px #060606, 3px 3px #060606, 4px 3px #060606, 5px 3px #fff,
          6px 3px #fff, 7px 3px, 8px 3px, 9px 3px, 10px 3px, 11px 3px,
          12px 3px #060606, 13px 3px #060606, 3px 4px #060606, 4px 4px #fff,
          5px 4px, 6px 4px, 7px 4px #fff, 8px 4px #fff, 9px 4px #fff,
          10px 4px #060606, 11px 4px, 12px 4px, 13px 4px #060606,
          14px 4px #060606, 2px 5px #060606, 3px 5px #060606, 4px 5px #fff,
          5px 5px, 6px 5px, 7px 5px #fff, 8px 5px, 9px 5px, 10px 5px #060606,
          11px 5px, 12px 5px, 13px 5px #060606, 14px 5px #060606,
          2px 6px #060606, 3px 6px #fff, 4px 6px, 5px 6px, 6px 6px, 7px 6px #fff,
          8px 6px, 9px 6px, 10px 6px #060606, 11px 6px, 12px 6px, 13px 6px,
          14px 6px #060606, 15px 6px #060606, 2px 7px #060606, 3px 7px #fff,
          4px 7px, 5px 7px, 6px 7px, 7px 7px #fff, 8px 7px, 9px 7px,
          10px 7px #060606, 11px 7px, 12px 7px, 13px 7px, 14px 7px #060606,
          15px 7px #060606, 2px 8px #060606, 3px 8px #fff, 4px 8px, 5px 8px,
          6px 8px, 7px 8px #fff, 8px 8px, 9px 8px, 10px 8px #060606, 11px 8px,
          12px 8px, 13px 8px, 14px 8px #060606, 15px 8px #060606,
          2px 9px #060606, 3px 9px #fff, 4px 9px, 5px 9px, 6px 9px, 7px 9px #fff,
          8px 9px, 9px 9px, 10px 9px #060606, 11px 9px, 12px 9px, 13px 9px,
          14px 9px #060606, 15px 9px #060606, 2px 10px #060606, 3px 10px #fff,
          4px 10px, 5px 10px, 6px 10px, 7px 10px #fff, 8px 10px, 9px 10px,
          10px 10px #060606, 11px 10px, 12px 10px, 13px 10px, 14px 10px #060606,
          15px 10px #060606, 2px 11px #060606, 3px 11px #fff, 4px 11px, 5px 11px,
          6px 11px, 7px 11px #fff, 8px 11px, 9px 11px, 10px 11px #060606,
          11px 11px, 12px 11px, 13px 11px, 14px 11px #060606, 15px 11px #060606,
          2px 12px #060606, 3px 12px #060606, 4px 12px #fff, 5px 12px, 6px 12px,
          7px 12px #fff, 8px 12px, 9px 12px, 10px 12px #060606, 11px 12px,
          12px 12px, 13px 12px #060606, 14px 12px #060606, 3px 13px #060606,
          4px 13px #fff, 5px 13px, 6px 13px, 7px 13px #fff, 8px 13px #060606,
          9px 13px #060606, 10px 13px #060606, 11px 13px, 12px 13px,
          13px 13px #060606, 14px 13px #060606, 3px 14px #060606,
          4px 14px #060606, 5px 14px #fff, 6px 14px, 7px 14px, 8px 14px,
          9px 14px, 10px 14px, 11px 14px, 12px 14px #060606, 13px 14px #060606,
          4px 15px #060606, 5px 15px #060606, 6px 15px #060606, 7px 15px,
          8px 15px, 9px 15px, 10px 15px #060606, 11px 15px #060606,
          12px 15px #060606, 13px 15px #060606, 6px 16px #060606,
          7px 16px #060606, 8px 16px #060606, 9px 16px #060606,
          10px 16px #060606, 11px 16px #060606;
      }
      @supports (-moz-appearance: meterbar) {
        &::before {
          box-shadow: 6px 1px 0 0.02em #060606, 7px 1px 0 0.02em #060606,
            8px 1px 0 0.02em #060606, 9px 1px 0 0.02em #060606,
            10px 1px 0 0.02em #060606, 11px 1px 0 0.02em #060606,
            4px 2px 0 0.02em #060606, 5px 2px 0 0.02em #060606,
            6px 2px 0 0.02em #060606, 7px 2px 0 0.02em #fff,
            8px 2px 0 0.02em #fff, 9px 2px 0 0.02em #fff,
            10px 2px 0 0.02em #060606, 11px 2px 0 0.02em #060606,
            12px 2px 0 0.02em #060606, 13px 2px 0 0.02em #060606,
            3px 3px 0 0.02em #060606, 4px 3px 0 0.02em #060606,
            5px 3px 0 0.02em #fff, 6px 3px 0 0.02em #fff, 7px 3px 0 0.02em,
            8px 3px 0 0.02em, 9px 3px 0 0.02em, 10px 3px 0 0.02em,
            11px 3px 0 0.02em, 12px 3px 0 0.02em #060606,
            13px 3px 0 0.02em #060606, 3px 4px 0 0.02em #060606,
            4px 4px 0 0.02em #fff, 5px 4px 0 0.02em, 6px 4px 0 0.02em,
            7px 4px 0 0.02em #fff, 8px 4px 0 0.02em #fff, 9px 4px 0 0.02em #fff,
            10px 4px 0 0.02em #060606, 11px 4px 0 0.02em, 12px 4px 0 0.02em,
            13px 4px 0 0.02em #060606, 14px 4px 0 0.02em #060606,
            2px 5px 0 0.02em #060606, 3px 5px 0 0.02em #060606,
            4px 5px 0 0.02em #fff, 5px 5px 0 0.02em, 6px 5px 0 0.02em,
            7px 5px 0 0.02em #fff, 8px 5px 0 0.02em, 9px 5px 0 0.02em,
            10px 5px 0 0.02em #060606, 11px 5px 0 0.02em, 12px 5px 0 0.02em,
            13px 5px 0 0.02em #060606, 14px 5px 0 0.02em #060606,
            2px 6px 0 0.02em #060606, 3px 6px 0 0.02em #fff, 4px 6px 0 0.02em,
            5px 6px 0 0.02em, 6px 6px 0 0.02em, 7px 6px 0 0.02em #fff,
            8px 6px 0 0.02em, 9px 6px 0 0.02em, 10px 6px 0 0.02em #060606,
            11px 6px 0 0.02em, 12px 6px 0 0.02em, 13px 6px 0 0.02em,
            14px 6px 0 0.02em #060606, 15px 6px 0 0.02em #060606,
            2px 7px 0 0.02em #060606, 3px 7px 0 0.02em #fff, 4px 7px 0 0.02em,
            5px 7px 0 0.02em, 6px 7px 0 0.02em, 7px 7px 0 0.02em #fff,
            8px 7px 0 0.02em, 9px 7px 0 0.02em, 10px 7px 0 0.02em #060606,
            11px 7px 0 0.02em, 12px 7px 0 0.02em, 13px 7px 0 0.02em,
            14px 7px 0 0.02em #060606, 15px 7px 0 0.02em #060606,
            2px 8px 0 0.02em #060606, 3px 8px 0 0.02em #fff, 4px 8px 0 0.02em,
            5px 8px 0 0.02em, 6px 8px 0 0.02em, 7px 8px 0 0.02em #fff,
            8px 8px 0 0.02em, 9px 8px 0 0.02em, 10px 8px 0 0.02em #060606,
            11px 8px 0 0.02em, 12px 8px 0 0.02em, 13px 8px 0 0.02em,
            14px 8px 0 0.02em #060606, 15px 8px 0 0.02em #060606,
            2px 9px 0 0.02em #060606, 3px 9px 0 0.02em #fff, 4px 9px 0 0.02em,
            5px 9px 0 0.02em, 6px 9px 0 0.02em, 7px 9px 0 0.02em #fff,
            8px 9px 0 0.02em, 9px 9px 0 0.02em, 10px 9px 0 0.02em #060606,
            11px 9px 0 0.02em, 12px 9px 0 0.02em, 13px 9px 0 0.02em,
            14px 9px 0 0.02em #060606, 15px 9px 0 0.02em #060606,
            2px 10px 0 0.02em #060606, 3px 10px 0 0.02em #fff, 4px 10px 0 0.02em,
            5px 10px 0 0.02em, 6px 10px 0 0.02em, 7px 10px 0 0.02em #fff,
            8px 10px 0 0.02em, 9px 10px 0 0.02em, 10px 10px 0 0.02em #060606,
            11px 10px 0 0.02em, 12px 10px 0 0.02em, 13px 10px 0 0.02em,
            14px 10px 0 0.02em #060606, 15px 10px 0 0.02em #060606,
            2px 11px 0 0.02em #060606, 3px 11px 0 0.02em #fff, 4px 11px 0 0.02em,
            5px 11px 0 0.02em, 6px 11px 0 0.02em, 7px 11px 0 0.02em #fff,
            8px 11px 0 0.02em, 9px 11px 0 0.02em, 10px 11px 0 0.02em #060606,
            11px 11px 0 0.02em, 12px 11px 0 0.02em, 13px 11px 0 0.02em,
            14px 11px 0 0.02em #060606, 15px 11px 0 0.02em #060606,
            2px 12px 0 0.02em #060606, 3px 12px 0 0.02em #060606,
            4px 12px 0 0.02em #fff, 5px 12px 0 0.02em, 6px 12px 0 0.02em,
            7px 12px 0 0.02em #fff, 8px 12px 0 0.02em, 9px 12px 0 0.02em,
            10px 12px 0 0.02em #060606, 11px 12px 0 0.02em, 12px 12px 0 0.02em,
            13px 12px 0 0.02em #060606, 14px 12px 0 0.02em #060606,
            3px 13px 0 0.02em #060606, 4px 13px 0 0.02em #fff, 5px 13px 0 0.02em,
            6px 13px 0 0.02em, 7px 13px 0 0.02em #fff, 8px 13px 0 0.02em #060606,
            9px 13px 0 0.02em #060606, 10px 13px 0 0.02em #060606,
            11px 13px 0 0.02em, 12px 13px 0 0.02em, 13px 13px 0 0.02em #060606,
            14px 13px 0 0.02em #060606, 3px 14px 0 0.02em #060606,
            4px 14px 0 0.02em #060606, 5px 14px 0 0.02em #fff, 6px 14px 0 0.02em,
            7px 14px 0 0.02em, 8px 14px 0 0.02em, 9px 14px 0 0.02em,
            10px 14px 0 0.02em, 11px 14px 0 0.02em, 12px 14px 0 0.02em #060606,
            13px 14px 0 0.02em #060606, 4px 15px 0 0.02em #060606,
            5px 15px 0 0.02em #060606, 6px 15px 0 0.02em #060606,
            7px 15px 0 0.02em, 8px 15px 0 0.02em, 9px 15px 0 0.02em,
            10px 15px 0 0.02em #060606, 11px 15px 0 0.02em #060606,
            12px 15px 0 0.02em #060606, 13px 15px 0 0.02em #060606,
            6px 16px 0 0.02em #060606, 7px 16px 0 0.02em #060606,
            8px 16px 0 0.02em #060606, 9px 16px 0 0.02em #060606,
            10px 16px 0 0.02em #060606, 11px 16px 0 0.02em #060606;
        }
      }
    `}
`;

export default Icon;
