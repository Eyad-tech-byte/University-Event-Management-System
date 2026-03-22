import render from "../../render.js";
import { notFound } from "../views/notFound.js";

export function notFoundController(){
    return render(notFound, {}, 404);
}