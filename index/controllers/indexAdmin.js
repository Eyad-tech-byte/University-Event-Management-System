import { render } from "../render.js";
import { adminView } from "../views/indexAdmin.js";

export function adminController({ request }){
    return render(adminView, {}, request, 200);
}