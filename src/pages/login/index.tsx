import React, { ReactElement } from "react";
import LoginMain from "~/components/login/LoginMain";

interface Props {}

function index({}: Props): ReactElement {
  return (
        <>
          <LoginMain />
        </>
      );
}

export default index;
