import React from "react";

type Props = {
  btnColor: string;
  hoverColor: string;
  title: string;
};

function FeedOneBoxButton({ btnColor, hoverColor, title }: Props) {
  return (
    <>
      <button
        className={`basis-2/12 rounded bg-${btnColor} py-2 px-4 font-bold text-white hover:bg-${hoverColor} `}
      >
        {title}
      </button>
    </>
  );
}

export default FeedOneBoxButton;
