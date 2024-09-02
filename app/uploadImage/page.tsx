"use client";
import { useRef, useState } from "react";

const UploadImage = () => {

    const fileInput = useRef<HTMLInputElement>(null);

    async function uploadFile(
      evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
      evt.preventDefault();
  
      const formData = new FormData();
      formData.append("file", fileInput?.current?.files?.[0]!);
  
      const response = await fetch("/api/uploadImage", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result);
    }

    return (
      <form className="max-w-md mt-10 mx-auto">
        <div className="flex flex-col gap-4 items-center space-x-6">
          <div className="">
            <img
              className="h-16 w-16 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt="Current profile photo"
            />
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                "
              ref={fileInput}
            />
            <span>{}</span>
          </label>
          <button
            type="submit"
            className="block w-full
                    mr-4 py-2 px-4
                    rounded-full border-0
                    text-sm font-semibold
                    bg-violet-50 text-violet-700
                    hover:bg-violet-100"
            onClick={uploadFile}
          >
            Submit
          </button>
        </div>
      </form>
    );
}

export default UploadImage