import { useLocation } from "react-router-dom";

function Detail() {
    const location = useLocation();

    return (
        <div>{location.pathname}</div>
    )
}

export default Detail;