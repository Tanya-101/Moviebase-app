import {Link} from "react-router-dom";
import { useTitle } from "../hooks/useTitle"; 
import { Btn } from "../components";
import  PageNotFoundImage  from "../assets/pagenotfound.jpg"

export const PageNotFound = () => {
   
  // eslint-disable-next-line
  const pageTitle = useTitle(`Page Not Found`);
  return (
    <main>
      <section className="flex flex-col justify-center px-2">

        <div className="flex flex-col items-center my-4">
          <p className="text-6xl m-4 text-red-600 font-bold dark:text-white mb-5 ">404, Oops!</p>
          <div className="max-w-lg">
            <img src= {PageNotFoundImage} alt="Page not found error" className="border-3 border-gray-50 rounded-lg"/>
          </div>
        </div>

        <div className="flex justify-center my-4">
          <Link to="/">
            <Btn>Back to MovieBase</Btn>
          </Link>
        </div>
      </section>
    </main>
  )
}
