import React from "react";
import Container from "../components/Container";

interface AdminProps {
  record?: {};
}

const Admin: React.FC<AdminProps> = () => {
  return (
    <>
      <Container title="Admin">
        <p>Admin Page</p>
      </Container>
    </>
  );
};

export default Admin;
