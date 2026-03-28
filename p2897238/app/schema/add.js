import { minLength, minWords, required } from "../validation.js";

export const addingNewsSchema = {
    short_title: { 
        validators: [required, minLength(5)] ,
        displayName: "title"
    },

    short_idName: { 
        validators: [required, minLength(3)] ,
        displayName: "Id"
    },

    short_paragraph: { 
        validators: [required, minWords(40)] ,
        displayName: "paragraph"
    },

    long_title: { 
        validators: [required, minLength(10)] ,
        displayName: "title"
    },

    long_header: { 
        validators: [required, minLength(5)] ,
        displayName: "header"
    },

    long_paragraph: { 
        validators: [required, minWords(40)] ,
        displayName: "paragraph"
    },

    long_header_2: { 
        validators: [required, minLength(5)] ,
        displayName: "header"
    },

    long_paragraph_2: { 
        validators: [required, minWords(40)] ,
        displayName: "paragraph"
    },

    long_header_3: { 
        validators: [required, minLength(5)] ,
        displayName: "header"
    },

    long_paragraph_3: { 
        validators: [required, minWords(40)] ,
        displayName: "paragraph"
    },

    long_header_4: { 
        validators: [required, minLength(5)] ,
        displayName: "header"
    },

    long_paragraph_4: { 
        validators: [required, minWords(20)] ,
        displayName: "paragraph"
    },

    long_paragraph_5: { 
        validators: [required, minWords(10)] ,
        displayName: "paragraph"
    }

};