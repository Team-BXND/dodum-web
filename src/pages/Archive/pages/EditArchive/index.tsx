import { useEffect, useState } from "react";
import AddArchive from "../AddArchive";
import { useLocation, useNavigate } from "react-router-dom";
import {privateInstance} from "@/api/axiosInstance.ts";

function EditArchive() {
  const [value, setValue] = useState("")
  const navigator = useNavigate();
  const path = useLocation();
  const postId = path.pathname.split("/")[3];
  
  useEffect(() => {
    privateInstance.get(`${import.meta.env.VITE_SERVER_URL}/archive/${postId}`, {
      params: {
        archiveId: postId
      }
    })
    .then((response) => {
      setValue(response.data)
    })
    .catch((error) => {
      alert(error.response.status);
      navigator(-1);
    })
  }, [])

  if(value){
    return (
      <AddArchive value={value} />
    )
  }
}


export default EditArchive;