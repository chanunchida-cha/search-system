/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { ReactElement } from "react";
import EditPassword from "~/components/edit-password/EditPassword";
import LoginMain from "~/components/login/LoginMain";

interface Props {}

function index({}: Props): ReactElement {
  return (
    <div>
      <div>
        {/* <LoginMain /> */}
        <EditPassword />
      </div>
    </div>
  );
}

export default index;
