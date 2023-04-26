import Link from "next/link";
import React from "react";

type Props = {
  btnColor: string;
  hoverColor: string;
  title: string;
  link: string;
};

function FeedOneBoxButton({ btnColor, hoverColor, title, link }: Props) {
  return (
    <>
      <Link href={`${link}`}>
        <button
          className={`basis-2/12 rounded bg-${btnColor} py-2 px-4 font-bold text-white hover:bg-${hoverColor} `}
        >
          {title}
        </button>
      </Link>
    </>
  );
}

export default FeedOneBoxButton;
