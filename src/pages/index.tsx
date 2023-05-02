import React, { ReactElement } from "react";
import FromCreateEdit from "~/components/creat-edit/create/FromCreate";
import MainFeed from "~/components/main-feed/MainFeed";

interface Props {}

function index({}: Props): ReactElement {
  return (
    <>
      <MainFeed />
    </>
  );
}

export default index;
