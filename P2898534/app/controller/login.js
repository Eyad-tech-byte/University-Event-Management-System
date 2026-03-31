import render from "../render.js";
import { loginView } from "../views/login.js";
export function loginController ({request}) {
    return render(loginView, {}, request, 200);
}
