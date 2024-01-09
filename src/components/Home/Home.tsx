import Layout from "../../Layout/Layout"
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { Button } from "../ui/button";
import './Home.css';
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <header className="py-4 px-6 flex secondary_bg items-center justify-between w-full">
        <div className="flex gap-2">
          <Button className="bg-black rounded-[50%] px-3">
            <IoChevronBack />
          </Button>
          <Button className="bg-black rounded-[50%] px-3">
            <IoChevronForward  />
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button className="paragraph-regular px-0 text_secondary">
            Premium
          </Button>
          <Button className="paragraph-regular px-0 text_secondary">
            Support
          </Button>
          <Button className="paragraph-regular px-0 text_secondary">
            Download
          </Button>
          <div className="m-4 w-[1px] h-6 bg-white"></div>
          <div>
            <Link to={'/sign-up'} className="paragraph-regular py-8 pl-2 pr-8 text_secondary">Sign up</Link>
            <Link to={'/login'} className="bg-white text-black paragraph-semibold rounded-full px-8 py-2">Log in</Link>
          </div>
        </div>
      </header>
      <main className="w-full px-6 py-2">
        <section className="home-page">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="flex-1 h2-semibold">Spotify Playlists</h2>
              <a href="#">Show all</a>
            </div>
            <div className="flex flex-wrap gap-6">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
        <div className="home-footer pt-10 mt-8">
          <nav className="flex justify-between">
            <div className="flex flex-1">
              <div className="w-[200px]">
                <p className="paragraph-semibold">Company</p>
                <a href="#" className="text_secondary my-2 block">About</a>
                <a href="#" className="text_secondary my-2 block">Jobs</a>
                <a href="#" className="text_secondary my-2 block">For the Record</a>
              </div>
              <div className="w-[200px]">
                <p className="paragraph-semibold">Communities</p>
                <a href="#" className="text_secondary my-2 block">For Artists</a>
                <a href="#" className="text_secondary my-2 block">Developers</a>
                <a href="#" className="text_secondary my-2 block">Advertising</a>
                <a href="#" className="text_secondary my-2 block">Investors</a>
                <a href="#" className="text_secondary my-2 block">Vendors</a>
              </div>
              <div className="w-[200px]">
                <p className="paragraph-semibold">Useful links</p>
                <a href="#" className="text_secondary my-2 block">Support</a>
                <a href="#" className="text_secondary my-2 block">Free Mobile App</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="rounded-full px-3 tertiary_bg">
                <a href="#"><FaInstagram className="w-4 h-4" /></a>
              </Button>
              <Button className="rounded-full px-3 tertiary_bg">
                <a href="#"><FaTwitter className="w-4 h-4" /></a>
              </Button>
              <Button className="rounded-full px-3 tertiary_bg">
                <a href="#"><FaFacebook className="w-4 h-4" /></a>
              </Button>
            </div>

          </nav>
        </div>
      </main>
    </Layout>
  )
}

export default Home

