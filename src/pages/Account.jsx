import React from "react";

const Account = ({ record, user }) => (
  <div>
    <div>Username: {user.displayName}</div>
    <div style={{ position: "absolute", bottom: "16px" }}>
      Arrow icons made by{" "}
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </a>
    </div>
  </div>
);

export default Account;
