import {  ChangeEvent } from "react";

export function PreviewImage(
  e: ChangeEvent<HTMLInputElement>,
  setPreview: (objectUrl: string) => void,
  setImage: (file: File) => void,
  image: File
) {
  let file;
  if (e.target.files && e.target.files[0]) {
    file = e.target.files[0];
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    console.log(objectUrl);
    setImage(file);
  } else {
    setImage(image);
  }
  return (
    <div className="border-border-box mx-auto flex h-[9rem] w-[10rem] flex-col items-center justify-center rounded-xl border-2 border-dashed p-5 sm:h-[13rem] sm:w-[20rem]">
      {image ? (
        <div className="h-full w-full">
          <img
            className="h-full w-full rounded-xl object-cover"
            src={preview}
          />
        </div>
      ) : (
        <div>
          {/* <div className="flex justify-center">{icon}</div> */}
        </div>
      )}
      <div className="flex justify-center">
        <label
          htmlFor="file-upload"
          className="text-text-upload relative  cursor-pointer rounded-md px-2  py-1  text-sm"
        >
          <span>Browse</span>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            // onChange={async (e) => {
            //   previewImage(e, setPreview, setImage, image!);
            // }}
            required
          />
        </label>
      </div>
    </div>
  );
}
