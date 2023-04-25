import { useRouter } from "next/router";
import React from "react";

type Props = {};

function Edit({}: Props) {
  const route = useRouter();
  console.log(route);

  return <div>[id]</div>;
}

export default Edit;
