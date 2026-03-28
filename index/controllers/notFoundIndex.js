import { render } from "../render.js";
import { notFound } from "../views/notFoundIndex.js";

export function notFoundController({ request }){
    return render(notFound, {}, request, 404);
}