import { formatURL } from "../../assets/events-script.js";

export async function saveImage(imageFile, eventName) {

    // extract the file extension like .png, .jpg etc.
    const extension = imageFile.name.split(".").pop();
    
    // generate a UUID to make the filename unique
    const uuid = crypto.randomUUID();
    
    // format event name (replace spaces with dashes) and append UUID
    const fileName = `${formatURL(eventName)}-${uuid}`;
    
    const finalFileName = `${fileName}.${extension}`;
    
    // converting the file into raw binary data (ArrayBuffer)
    const buffer = await imageFile.arrayBuffer();
    
    // convert raw data into byte format (Uint8Array) and save to file system
    await Deno.writeFile(
        `./P2896775/assets/event-images/${finalFileName}`,
        new Uint8Array(buffer)
    );
    
    // return the file path to store in database
    return `/P2896775/assets/event-images/${finalFileName}`;
}

export async function deleteImage(eventImageLink) {

    // add "." so the path works from the project directory
    const imagePath = "." + eventImageLink;

    // delete the file from the system
    await Deno.remove(imagePath);
}