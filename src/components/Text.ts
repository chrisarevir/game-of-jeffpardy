import styled from "styled-components";

const FontColor = {
  primary: "#f5af6c",
  success: "#92cc41",
  warning: "#f7d51d",
  error: "#e76e55",
  disabled: "#3236c9"
} as const;

type TextVariant = "primary" | "success" | "warning" | "error" | "disabled";

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
