import { defineType, defineField } from "sanity"

export const post = defineType( {
    name: "post",
    type: "document",
    title: "Blog Post",
    fields:[
        defineField({
            name: "title",
            type: "string",
            title: "Post Title",
            description: "title of the page",
            validation: Rule => Rule.required().error("this field is required"),
        }),
        defineField({
            type:"slug",
            name: "slug",
            title: "Slug",
            options:{
                source:"title",
                maxLength:96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            type:"text",
            name:"summary",
            title: "Summary",
            description: "Summary of your Blog",
            validation: Rule => Rule.required().error("this field is required"),
        }),
        defineField({
            type:"image",
            name:"image",
            title:"Insert Image",
            validation: Rule => Rule.required().error("this field is required"),
            options:{
                hotspot:true 
            }
        }),
        defineField({
            type:"array",
            title: "Content",
            name:"content",
            of:[{type:"block"}],
        }),
        defineField({
            type:"reference",
            name:"author",
            title:"Author",
            to:[{type:"author"}]
        })


    ]
})

