import styled, { css } from "styled-components";
import Text from "./Text";

interface RadioProps {
  dark?: boolean;
}

const Radio = styled.input.attrs({ type: "radio" })<RadioProps>`
  appearance: none;
  border: 0;
  clip-path: inset(50%);
  clip: rect(0 0 0 0);
  height: 1px;
  margin-right: 20px;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  width: 1px;

  & + ${Text} {
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
        14 0,
      pointer;
    position: relative;
  }

  &:checked + ${Text}::before {
    box-shadow: 2px 2px, 4px 2px, 2px 4px, 4px 4px, 6px 4px, 8px 4px, 2px 6px,
      4px 6px, 6px 6px, 8px 6px, 10px 6px, 2px 8px, 4px 8px, 6px 8px, 8px 8px,
      10px 8px, 12px 8px, 2px 10px, 4px 10px, 6px 10px, 8px 10px, 10px 10px,
      2px 12px, 4px 12px, 6px 12px, 8px 12px, 2px 14px, 4px 14px;
    color: #212529;
    content: "";
    height: 2px;
    left: -20px;
    position: absolute;
    top: -2px;
    width: 2px;
  }

  @supports (-moz-appearance: meterbar) {
    &:checked + ${Text}::before {
      box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 2px 4px 0 0.02em,
        4px 4px 0 0.02em, 6px 4px 0 0.02em, 8px 4px 0 0.02em, 2px 6px 0 0.02em,
        4px 6px 0 0.02em, 6px 6px 0 0.02em, 8px 6px 0 0.02em, 10px 6px 0 0.02em,
        2px 8px 0 0.02em, 4px 8px 0 0.02em, 6px 8px 0 0.02em, 8px 8px 0 0.02em,
        10px 8px 0 0.02em, 12px 8px 0 0.02em, 2px 10px 0 0.02em,
        4px 10px 0 0.02em, 6px 10px 0 0.02em, 8px 10px 0 0.02em,
        10px 10px 0 0.02em, 2px 12px 0 0.02em, 4px 12px 0 0.02em,
        6px 12px 0 0.02em, 8px 12px 0 0.02em, 2px 14px 0 0.02em,
        4px 14px 0 0.02em;
    }
  }

  &:checked:focus + ${Text}::before, &:checked:hover + ${Text}::before {
    animation: blink 1s infinite steps(1);
  }

  &:checked:focus + ${Text}::before {
    box-shadow: 2px 2px, 4px 2px, 2px 4px, 4px 4px, 6px 4px, 8px 4px, 2px 6px,
      4px 6px, 6px 6px, 8px 6px, 10px 6px, 2px 8px, 4px 8px, 6px 8px, 8px 8px,
      10px 8px, 12px 8px, 2px 10px, 4px 10px, 6px 10px, 8px 10px, 10px 10px,
      2px 12px, 4px 12px, 6px 12px, 8px 12px, 2px 14px, 4px 14px;
    color: #adafbc;
    height: 2px;
    width: 2px;
  }

  @supports (-moz-appearance: meterbar) {
    &:checked:focus + ${Text}::before {
      box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 2px 4px 0 0.02em,
        4px 4px 0 0.02em, 6px 4px 0 0.02em, 8px 4px 0 0.02em, 2px 6px 0 0.02em,
        4px 6px 0 0.02em, 6px 6px 0 0.02em, 8px 6px 0 0.02em, 10px 6px 0 0.02em,
        2px 8px 0 0.02em, 4px 8px 0 0.02em, 6px 8px 0 0.02em, 8px 8px 0 0.02em,
        10px 8px 0 0.02em, 12px 8px 0 0.02em, 2px 10px 0 0.02em,
        4px 10px 0 0.02em, 6px 10px 0 0.02em, 8px 10px 0 0.02em,
        10px 10px 0 0.02em, 2px 12px 0 0.02em, 4px 12px 0 0.02em,
        6px 12px 0 0.02em, 8px 12px 0 0.02em, 2px 14px 0 0.02em,
        4px 14px 0 0.02em;
    }
  }

  ${({ dark }) =>
    dark &&
    css`
      & + ${Text} {
        color: #fff;
      }

      & + ${Text}::before {
        color: #fff;
      }

      &:checked + ${Text}::before {
        height: 2px;
        width: 2px;
        box-shadow: 2px 2px, 4px 2px, 2px 4px, 4px 4px, 6px 4px, 8px 4px,
          2px 6px, 4px 6px, 6px 6px, 8px 6px, 10px 6px, 2px 8px, 4px 8px,
          6px 8px, 8px 8px, 10px 8px, 12px 8px, 2px 10px, 4px 10px, 6px 10px,
          8px 10px, 10px 10px, 2px 12px, 4px 12px, 6px 12px, 8px 12px, 2px 14px,
          4px 14px;
        color: #fff;
      }

      @supports (-moz-appearance: meterbar) {
        &:checked + ${Text}::before {
          box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 2px 4px 0 0.02em,
            4px 4px 0 0.02em, 6px 4px 0 0.02em, 8px 4px 0 0.02em,
            2px 6px 0 0.02em, 4px 6px 0 0.02em, 6px 6px 0 0.02em,
            8px 6px 0 0.02em, 10px 6px 0 0.02em, 2px 8px 0 0.02em,
            4px 8px 0 0.02em, 6px 8px 0 0.02em, 8px 8px 0 0.02em,
            10px 8px 0 0.02em, 12px 8px 0 0.02em, 2px 10px 0 0.02em,
            4px 10px 0 0.02em, 6px 10px 0 0.02em, 8px 10px 0 0.02em,
            10px 10px 0 0.02em, 2px 12px 0 0.02em, 4px 12px 0 0.02em,
            6px 12px 0 0.02em, 8px 12px 0 0.02em, 2px 14px 0 0.02em,
            4px 14px 0 0.02em;
        }
      }

      &:checked:focus + ${Text}::before {
        box-shadow: 2px 2px, 4px 2px, 2px 4px, 4px 4px, 6px 4px, 8px 4px,
          2px 6px, 4px 6px, 6px 6px, 8px 6px, 10px 6px, 2px 8px, 4px 8px,
          6px 8px, 8px 8px, 10px 8px, 12px 8px, 2px 10px, 4px 10px, 6px 10px,
          8px 10px, 10px 10px, 2px 12px, 4px 12px, 6px 12px, 8px 12px, 2px 14px,
          4px 14px;
        color: #fff;
        height: 2px;
        width: 2px;
      }

      @supports (-moz-appearance: meterbar) {
        &:checked:focus + ${Text}::before {
          box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 2px 4px 0 0.02em,
            4px 4px 0 0.02em, 6px 4px 0 0.02em, 8px 4px 0 0.02em,
            2px 6px 0 0.02em, 4px 6px 0 0.02em, 6px 6px 0 0.02em,
            8px 6px 0 0.02em, 10px 6px 0 0.02em, 2px 8px 0 0.02em,
            4px 8px 0 0.02em, 6px 8px 0 0.02em, 8px 8px 0 0.02em,
            10px 8px 0 0.02em, 12px 8px 0 0.02em, 2px 10px 0 0.02em,
            4px 10px 0 0.02em, 6px 10px 0 0.02em, 8px 10px 0 0.02em,
            10px 10px 0 0.02em, 2px 12px 0 0.02em, 4px 12px 0 0.02em,
            6px 12px 0 0.02em, 8px 12px 0 0.02em, 2px 14px 0 0.02em,
            4px 14px 0 0.02em;
        }
      }
    `}
`;

Radio.displayName = "NES Radio";

export default Radio;
