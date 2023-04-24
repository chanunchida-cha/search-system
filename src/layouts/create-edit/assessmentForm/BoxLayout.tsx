import React from "react";
import UploadFileInForm from "~/components/creat-edit/assessmentForm/UploadFileInForm";

type Props = {
  title: string;
  children: React.ReactNode;
};

function BoxLayout({ title, children }: Props) {
  return (
    <div>
      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-12">
          <label className="items-center justify-center font-extrabold leading-6 text-gray-900">
            {title}
          </label>
        </div>
      </div>
      {children}
    </div>
  );
}

export default BoxLayout;
