import React from "react";
import { Container } from "nes-react";

interface PasswordForgetProps {
  record?: {};
}

const PasswordForget: React.FC<PasswordForgetProps> = () => {
  return (
    <>
      <Container title="Forgot Your Password?" rounded>
        <p>Password Forget Page</p>
      </Container>
    </>
  );
};

export default PasswordForget;
