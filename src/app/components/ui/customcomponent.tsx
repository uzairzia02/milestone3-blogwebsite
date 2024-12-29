import { PortableTextComponents } from "next-sanity";

export const revalidate = 5;

export const components:PortableTextComponents = {
    block:{
        h3:({children}) =><h3 className="text-xl text-blue-600 font-bold my-3 " >{children}</h3>,
        h2:({children}) =><h2 className="text-2xl text-blue-500 font-bold my-3 " >{children}</h2>,
        h1:({children}) =><h1 className="text-3xl text-blue-500 font-bold my-3 " >{children}</h1>
    },
    listItem:{
        bullet:({children}) => <li className="list-disc list-inside ml-3 mt-2 " >{children}</li>
    }
}
