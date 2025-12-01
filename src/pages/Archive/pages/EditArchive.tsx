import { useEffect, useState } from "react";
import AddArchive from "./AddArchive";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function EditArchive() {
  const [value, setValue] = useState("")
  const navigator = useNavigate();
  const path = useLocation();
  const postId = path.pathname.split("/")[3];
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/archive/${postId}`, {
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