import Image from "next/image";
import Footer from "../../../app/components/ui/footer";
import Header from "../../../app/components/ui/header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { components } from "@/app/components/ui/customcomponent";
import CommentSection from "@/app/components/ui/comment";


export const revalidate = 5;


export async function generateStaticParams(){
    const query = `*[_type=="post"]{
  "slug":slug.current 
}`;
const slugs = await client.fetch(query)
const slugRoutes:string[] = slugs.map((slug:{slug:string})=>(slug.slug))
// console.log(slugRoutes)
return slugRoutes.map((slug:string)=>({slug}))

}



export default async function BlogPage({params:{slug}}:{params:{slug:string}} ){

    const query = `*[_type=="post" && slug.current=='${slug}']{
  title,summary,image,content,
    author->{bio,name}
}[0]`;
const post = await client.fetch(query)
console.log(post)


   return (
       <>
       <div className="min-h-screen flex flex-col">
           <Header />

           {/* Title section */}
           <div className="w-full px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-5 sm:mt-8 md:mt-10">
               <h2 className="text-3xl sm:text-4xl md:text-[50px] font-extrabold text-center tracking-wide">
                   {post.title}
               </h2>

               <p className="text-base sm:text-lg md:text-[20px] mt-5 sm:mt-8 md:mt-10 text-gray-600 text-justify"> 
                   {post.summary} 
               </p>
           </div>

           {/* Image Div */}
           <div className="w-full px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-5 sm:mt-8 md:mt-10 flex justify-center">
               <div className="relative w-full sm:w-[500px] md:w-[600px] lg:w-[700px]">
                   <Image 
                       src={urlFor(post.image).url()} 
                       alt="Image" 
                       width={700} 
                       height={700}
                       className="rounded-lg hover:scale-105 ease-out duration-500 shadow-md shadow-blue-600"
                   />
               </div>
           </div>

           {/* Author div */}
           <div className="w-full px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-5 sm:mt-8 md:mt-10 italic">
               <h3 className="text-xl sm:text-2xl md:text-[22px] font-semibold text-center">
                   {post.author.name}
               </h3>
               <p className="px-4 sm:px-12 md:px-20 mt-3 text-base sm:text-lg"> 
                   {post.author.bio}
               </p>
           </div>

           {/* Content div */}
           <div className="w-full px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto my-5 sm:my-8 md:my-10 text-justify text-base sm:text-lg md:text-[20px]">
           <section>
            <PortableText 
            value={post.content} components={components}           
             />                            
            </section>
               </div>

               <CommentSection />

               
           <Footer />
       </div>
       </>
   )
}