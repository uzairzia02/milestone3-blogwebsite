import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import BlogCard from "./components/ui/blogcard";
import { client } from "@/sanity/lib/client";



export const revalidate = 5;


export default async function Home() {
 
  const query = `*[_type=="post"]{
  summary, title,image,
    "slug":slug.current
}`;
const posts:Post[] = await client.fetch(query)
// console.log(posts)




  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto w-full px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:justify-between ">
       {
        posts.map((post:Post)=>(
          <BlogCard post={post} key={post.slug} />
        ))
       }
        
          
        </div>
      </main>

      <Footer />
    </div>
  );
}