
import ReactDOM from "react-dom";

export default function Portal({children}) {
    const el = document.getElementById("modal");
    return ReactDOM.createPortal(children,el);
}