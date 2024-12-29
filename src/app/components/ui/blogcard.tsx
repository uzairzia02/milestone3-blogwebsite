import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function BlogCard({post}:{post:Post} ) {
  return (
    <div className="p-3 sm:p-4 md:p-5">
      <div className="h-[420px] sm:h-[440px] md:h-[510px] w-full sm:w-[350px] md:w-[350px] rounded shadow-xl hover:shadow-blue-400 hover:scale-105 ease-out duration-700">
        {/* Image Section */}
        <div className="h-[200px] sm:h-[225px] md:h-[250px] rounded relative">
          <Image
            src={urlFor(post.image).url()}
            alt="AI Image"
            fill
            className="object-cover rounded-t"
           
            priority={false}
          />

        </div>

        {/* Title & Summary */}
        <div className="p-3 sm:p-4 mt-2 sm:mt-3 ">
          <h2 className="text-xl sm:text-2xl font-bold line-clamp-2 mb-2">
            {post.title}
          </h2>
          <p className="text-sm sm:text-base line-clamp-4 text-justify text-gray-600">
            {post.summary}
          </p>

          <Link
            href={`/blog/${post.slug}`}
            className="px-3 sm:px-4 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white block mt-4 sm:mt-5 font-bold text-center text-sm sm:text-base transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}