import React from "react";
import * as S from "./UploadFile.ts";
import { useRef,useState } from "react";
const UploadFile = ({FileChange}:any) => {
    const ImageUploader=useRef<HTMLInputElement>(null);
    const [file,setFile]=useState<File|null>(null);
    const [previewURL,setPreviewURL]=useState<string|null>(null);
    const handleImageClick=()=>{
        ImageUploader.current?.click();
    }

    const handleImageChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const selectedFile=e.target.files?.[0];
        if(selectedFile){
            setFile(selectedFile);
            const reader=new FileReader();
            reader.onloadend=()=>{
                setPreviewURL(reader.result as string);
                FileChange(selectedFile);
            };
            reader.readAsDataURL(selectedFile);
        }
    }

    return<>
    <S.imgUpload src="src/assets/img.png" alt="img upload" onClick={handleImageClick}></S.imgUpload>
        <input
        type="file"
        accept="image/*"
        ref={ImageUploader}
        onChange={handleImageChange}
        style={{display:"none"}}/>
        </>
}
export default UploadFile;