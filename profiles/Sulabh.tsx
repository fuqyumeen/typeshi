import { Link } from "react-router-dom";
import { blogs } from "../blogs";


function Sulabh() {
 
return (
  <div className="min-h-screen flex justify-center items-start">
    <div className="w-full max-w-2xl px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Latest
      </h1>

      <ul className="space-y-4">
        {blogs
        .filter((blog)=> blog.Author === "Sulabh")
        .map((blog, index) => (
          <li
            key={index}
            className="relative group w-full py-1"
          >
            {/* Centered title */}
            <div className="flex justify-center">
              <Link
                to={blog.path}
                className="w-full text-center font-medium hover:underline text-2xl break-words text-white/50"
              >
                {blog.title}
              </Link>
            </div>

            {/* Date on the right */}
            <small className="absolute right-0 top-0 -translate-y-1/2 translate-x-2 text-gray-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black px-1">
              ~ {blog.date}
            </small>
          </li>
        ))}
      </ul>
    </div>
  </div>
);}

export default Sulabh
