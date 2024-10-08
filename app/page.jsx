import BgImage from "@/public/background.jpg";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";

const Page = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url('${BgImage.src}')`,
      }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen text-white p-6 bg-cover bg-center bg-no-repeat bg-gray-800/50">
        <h1 className="text-5xl font-extrabold mb-4 text-amber-300 text-center drop-shadow-lg">
          Welcome to 90sKid.shop!
        </h1>
        <p className="text-lg text-center bg-black bg-opacity-50 px-4 py-2 rounded-md mt-2 drop-shadow-md">
          Bringing the 90s back!
        </p>
        <div className="mt-8 bg-white text-yellow-900 text-center px-6 py-4 rounded-md shadow-lg">
          <p className="text-2xl font-bold text-amber-500">
            🚧 Site is Under Construction! 🚧
          </p>
          <p className="text-base mt-1">
            Stay tuned for a blast from the past!
          </p>
        </div>
        <Link
          href="https://www.facebook.com/profile.php?id=61566543134350"
          className="bg-blue-600 flex items-center gap-3 font-medium rounded-md mt-5 text-white py-2 px-3"
        >
          <span className="text-xl">Follow Us</span>
          <AiFillFacebook className="text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default Page;
