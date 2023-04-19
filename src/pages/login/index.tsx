import React, { ReactElement } from "react";
import LoginMain from "~/components/login/loginMain";

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
