import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <header>
        <div className="logo p-8">
          <div className="flex justify-start items-center gap-1">
            <FaSpotify size={40} />
            <p className="text-2xl font-bold">Spotify</p>
          </div>
        </div>
      </header>
      <section className="tertiary_bg login-container p-8">
        <div className="bg-black w-1/2 mx-auto flex flex-col py-8 rounded-lg">
          <h1 className="text-center text-4xl my-12 font-bold">
            Log in to Spotify
          </h1>
          <div className="border-b border-gray-500 w-3/4 mx-auto mb-8"></div>
          <form className="text-center mx-auto w-[324px]">
            <div className="form-group pb-4">
              <div className="flex justify-start mx-auto pb-2">
                <label htmlFor="email" className="text-sm">Email or Username</label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email or username"
                className="tertiary_bg w-full border border-gray-100 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-[3px] focus:ring-white-600 outline-none p-3 hover:ring-white text-base rounded-sm"
              />
            </div>
            <div className="form-group pb-4">
              <div className="flex justify-start mx-auto pb-2">
                <label htmlFor="email" className="text-sm">Password</label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="tertiary_bg w-full border border-gray-100 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-[3px] focus:ring-white-600 outline-none p-3 hover:ring-white text-base rounded-sm"
              />
            </div>
            <div className="form-group py-8">
              <input
                type="submit"
                value='Log In'
                className="block w-full outline-none p-3 text-black bg-green-500 rounded-full hover:scale-110 hover:font-semibold transition-all duration-200 text-base"
              />
            </div>
            <div className="form-group">
              <a href="#" className="block w-full text-white underline hover:text-green-500 transition-all duration-200 text-base"
              >Forgot your password?</a>
            </div>

          </form>
          <div className="border-b border-gray-500 w-3/4 mx-auto my-8"></div>
          <div className="sign-up-section">
            <h2 className="text-center text-base">
              <span className="box-border text-base text-gray-400">Don't have an account?</span>
              <Link to="/signup" className="block text-white underline hover:text-green-500 transition-all duration-200 text-base">
                <span className="ml-2">Sign up for Spotify</span>
              </Link>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
