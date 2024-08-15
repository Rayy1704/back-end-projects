import ReactDOM from "react-dom/client";
import {add,sub,mul,mod,div,display} from "./componetns/calculater";

ReactDOM.createRoot(document.getElementById("root")).render(
    display(
        add(2,3),
        sub(2,3),
        mod(2,3),
        div(2,3),
        mul(2,3)
    )
)
