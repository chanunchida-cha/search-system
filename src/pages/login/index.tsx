/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { ReactElement } from "react";
import LoginMain from "~/components/login/LoginMain";

interface Props {}

function index({}: Props): ReactElement {
  return (
    <div>
      <div>
        <LoginMain />
      </div>
    </div>
  );
}

export default index;
