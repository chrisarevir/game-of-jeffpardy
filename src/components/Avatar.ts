import styled from "styled-components";

type Size = "sm" | "md" | "lg";

interface AvatarProps {
  rounded?: boolean;
  size?: Size;
}

const Dimensions = {
  sm: 16,
  md: 48,
  lg: 64
} as const;

function getDimensions(size?: Size) {
  if (size) {
    return Dimensions[size];
  }

  return 32;
}

const Avatar = styled.img<AvatarProps>`
  border-radius: ${({ rounded = false }) => (rounded ? `50px` : "initial")};
  height: ${({ size }) => getDimensions(size)}px;
  image-rendering: pixelated;
  width: ${({ size }) => getDimensions(size)}px;
`;

export default Avatar;
