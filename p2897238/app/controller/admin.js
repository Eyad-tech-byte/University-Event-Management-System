import render from "../../render.js";
import { adminView } from "../views/admin.js";

export function adminController(){
    return render(adminView, {}, 200);
}