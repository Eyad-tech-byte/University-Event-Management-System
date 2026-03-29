import { minLength, minWords, required } from "../validation.js";

export const addingNewsSchema = {
    short_title: { 
        validators: [required, minLength(5)] ,
        displayName: "Title"
    },

    short_idName: { 
        validators: [required, minLength(3)] ,
        displayName: "Id"
    },
    short_date: {
        validators: [required],
        displayName: "Date"
    },
    short_catagory: {
        validators: [required],
        displayName: "Catagory"
    },
    short_image: {
        validators: [required],
        displayName: "Image"
    },

    short_paragraph: { 
        validators: [required, minWords(40)] ,
        displayName: "Paragraph"
    },

    long_title: { 
        validators: [required, minLength(10)] ,
        displayName: "Title"
    },
    long_image: {
        validators: [required],
        displayName: "Image"
    },

    long_header: { 
        validators: [required, minLength(5)] ,
        displayName: "Header"
    },

    long_paragraph: { 
        validators: [required, minWords(40)] ,
        displayName: "Paragraph"
    },

    long_header_2: { 
        validators: [required, minLength(5)] ,
        displayName: "Header 2"
    },

    long_paragraph_2: { 
        validators: [required, minWords(40)] ,
        displayName: "Paragraph 2"
    },

    long_header_3: { 
        validators: [required, minLength(5)] ,
        displayName: "Header 3"
    },

    long_paragraph_3: { 
        validators: [required, minWords(40)] ,
        displayName: "Paragraph 3"
    },

    long_header_4: { 
        validators: [required, minLength(5)] ,
        displayName: "Header 4"
    },

    long_paragraph_4: { 
        validators: [required, minWords(20)] ,
        displayName: "Paragraph 4"
    },

    long_paragraph_5: { 
        validators: [required, minWords(10)] ,
        displayName: "Paragraph 5"
    }

};