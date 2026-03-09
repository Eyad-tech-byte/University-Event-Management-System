import { createData } from "../models/test.js";
import render from "../tools/render.js";
import { testView } from "../views/test.js";

export function testController({ request }) {
    
    const num = createData();

    return render(testView, { num }, request, "");
}