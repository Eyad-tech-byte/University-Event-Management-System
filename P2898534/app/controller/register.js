import render from "../render.js";
import { registerview } from "../views/register.js";

export function registerController ({request}) {
    return render(registerview(), {}, request, 200);
}
