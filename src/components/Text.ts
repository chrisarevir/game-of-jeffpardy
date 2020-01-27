import styled from "styled-components";

const FontColor = {
  disabled: "#3236c9",
  error: "#e76e55",
  primary: "#fff",
  question: "#f5af6c",
  success: "#92cc41",
  warning: "#f7d51d"
} as const;

type TextVariant =
  | "disabled"
  | "error"
  | "primary"
  | "question"
  | "success"
  | "warning";

function getFontColor(variant?: TextVariant) {
  if (variant) {
    return FontColor[variant];
  }

  return "inherit";
}

interface TextProps {
  variant?: TextVariant;
}

const Text = styled.span<TextProps>`
  color: ${({ variant }) => getFontColor(variant)};
`;

Text.displayName = "NES Text";

export default Text;
