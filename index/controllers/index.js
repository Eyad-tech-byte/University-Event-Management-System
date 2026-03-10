import { getSomeEvents } from "../models/index.js";
import { render } from "../render.js";
import { indexView } from "../views/index.js";

export function indexController({ request }) {
    const events = getSomeEvents();

    return render(indexView, { events }, request);
}