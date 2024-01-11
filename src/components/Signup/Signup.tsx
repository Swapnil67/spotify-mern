import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main className="h-screen">
      <header className="secondary_bg">
        <div className="logo p-8">
          <div className="flex justify-start items-center gap-1">
            <FaSpotify size={40} />
            <p className="text-2xl font-bold">Spotify</p>
          </div>
        </div>
      </header>
      <section className="secondary_bg login-container p-8">
        <div className="w-[324px] mx-auto flex flex-col pb-8 rounded-lg items-start">
          <h1 className="text-5xl mb-12 font-bold text-left">
            Sign up to start listening
          </h1>
          <form className="text-center w-[324px]">
            <div className="form-group pb-4">
              <div className="flex justify-start mx-auto pb-2">
                <label htmlFor="email" className="text-sm">
                  Email address
                </label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@domain.com"
                className="tertiary_bg w-full border border-gray-100 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-[3px] focus:ring-white-600 outline-none p-3 hover:ring-white text-base rounded-sm"
              />
            </div>
            <div className="form-group py-8">
              <input
                type="submit"
                value='Next'
                className="block w-full outline-none p-3 font-bold text-black primary_bg rounded-full hover:scale-110 hover:font-semibold transition-all duration-200 text-base"
              />
            </div>
          </form>
          <div className="border-b border-gray-500 w-3/4 mx-auto my-8"></div>
          <div className="sign-up-section text-center mx-auto">
            <h2 className="text-center text-base">
              <span className="box-border text-base text-gray-400">
                Already have an account?
              </span>
              <Link
                to="/login"
                className="block text-white underline hover:text-green-500 transition-all duration-200 text-base"
              >
                <span className="ml-2">Login to Spotify</span>
              </Link>
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
