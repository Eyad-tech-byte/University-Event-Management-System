import { render } from "../render.js";
import { notFound } from "../views/notFoundIndex.js";

export function notFoundController(){
    return render(notFound, {}, 404);
}