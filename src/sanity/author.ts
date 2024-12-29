import { defineType, defineField } from "sanity"

export const author = defineType({
    name:"author",
    type:"document",
    title:"Author",
    fields:[
        defineField({
            name:"name",
            type:"string",
            title:"Author Name",
            validation: Rule=> Rule.required()
        }),
        defineField({
            name:"bio",
            type:"string",
            title:"Author Bio",
            validation: Rule=> Rule.required()

        })
    ]
})