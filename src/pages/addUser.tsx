import React, { ReactElement } from "react";
import AddUserAccount from "~/components/user-manage/AddUserAccount";

interface Props {}

function addUser({}: Props): ReactElement {
  return (
        <>
          <AddUserAccount />
        </>
      );
}

export default addUser;
