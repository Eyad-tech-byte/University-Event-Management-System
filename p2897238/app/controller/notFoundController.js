import render from "../../render.js";
import { notFound } from "../views/notFound.js";

export function notFoundController({ request }){
    return render(notFound, {}, request, 404);
}