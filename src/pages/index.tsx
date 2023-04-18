import React, { ReactElement } from "react";
import FromCreateEdit from "~/components/creat-edit/FromCreateEdit";

interface Props {}

function index({}: Props): ReactElement {
  return (
    <>
      <FromCreateEdit />
    </>
  );
}

export default index;
