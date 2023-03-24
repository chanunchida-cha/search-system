import React, { ReactElement } from "react";

interface Props {
  label: string;
  onClick: () => void;
}

function Button({ label }: Props): ReactElement {
  return (
    <div>
      <button>{label}</button>
    </div>
  );
}

export default Button;
