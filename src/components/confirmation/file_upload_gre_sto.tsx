
import { DropDrag } from "./drop_drag_gre_sto";
import { images_confirmation } from "../../utils/images_store.json";
import { useState } from "react";
import { confirmationOrder } from "../../controllers/confirmation_gre_sto";
import { useParams } from "react-router-dom";



export const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { id } = useParams();
  const [isUploading, setIsUploading] = useState(false);
  const removeItem = (id: number) => {
    const filterd = uploadedFiles.filter((f) => f.lastModified !== id);
    setUploadedFiles(filterd);
  };
  const handleUpload = (files: File[]) => {
    try {
      setIsUploading(true);
      if (uploadedFiles.length === 0) {
        setUploadedFiles(uploadedFiles.concat(files));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsUploading(false);
    }
  };



  const sendConfirmation = () => {
    confirmationOrder(uploadedFiles,id!)
  }
  

  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="flex justify-center mx-auto ">
        <img
          src={images_confirmation[0]}
          alt="Description of image"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto"
        ></img>
      </div>
      <DropDrag onUpload={handleUpload} />
      {uploadedFiles.length > 0 && (
        <ul className="w-2/3  my-5">
          {uploadedFiles.map((file, index) => (
            <li
              className="bg-sky-100 px-5 py-3 w-full my-2 rounded-lg"
              key={index}
            >
              <div className="flex justify-between items-center w-full">
                {file.type.startsWith("image/") ? (
                  <div className="flex gap-5 items-center">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="avatar"
                      className="image-input-wrapper w-12 h-12 rounded-full cursor-pointer opacity-75-hover"
                    />
                    <span>{file.name}</span>
                  </div>
                ) : (
                  <div className="flex gap-5 items-center">
                    <div className=" bg-gray-200  w-12 h-12 rounded-full cursor-pointer"></div>
                    <span>{file.name}</span>
                  </div>
                )}
                <span
                  onClick={() => removeItem(file.lastModified)}
                  className=" cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="1"
                      x="6"
                      y="17.3137"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(-45 6 17.3137)"
                      fill="currentColor"
                    />
                    <rect
                      x="7.41422"
                      y="6"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(45 7.41422 6)"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}

      <label
        htmlFor=""
        className="btn  btn-block mt-5 inline-flex items-center  justify-center rounded-md border-2 border-transparent bg-[#9d567a] bg-none px-6 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#9d567a]  hover:bg-opacity-80"
        onClick={() => {
          sendConfirmation()
        }}
      >
        Subir confirmación
      </label>
    </div>
  );
};
