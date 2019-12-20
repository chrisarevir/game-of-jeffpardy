import React from "react";
import Container from "../components/Container";

interface PasswordForgetProps {
  record?: {};
}

const PasswordForget: React.FC<PasswordForgetProps> = () => {
  return (
    <>
      <Container title="Forgot Your Password?">
        <p>Password Forget Page</p>
      </Container>
    </>
  );
};

export default PasswordForget;
