import { FaSpotify, FaPlus, FaHome, FaSearch, FaArrowRight } from "react-icons/fa";
import {FiGlobe} from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
// import { IoIosMenu } from "react-icons/io";

import './Sidebar.css';

import { Button } from "../ui/button";
import Signup from "./Signup";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Signup from "./Signup";

// const carousel_menu: string[] = [
//   'Playlists',
//   'Artists',
//   'Albums',
//   'Podcasts & Shows',
// ]

// interface playlist {
//   name: string;
//   image: string;
//   userId: string;
// }

// const playlists: playlist[] = [
//   {
//     image: 'bhussi.jpeg',
//     name: 'Bhussi',
//     userId: "Swapnil67"
//   },
//   {
//     image: 'english-hiphop.jpeg',
//     name: 'English Hiphop',
//     userId: "Swapnil67"
//   },
//   {
//     image: 'soulful-melody.jpeg',
//     name: 'SOULFULL MELODY',
//     userId: "Nahosh"
//   },
//   {
//     image: 'peace.jpeg',
//     name: 'Peace',
//     userId: "Swapnil67"
//   }
// ]

const Sidebar = () => {
  return (
    <div className="w-1/4 sidebar">
      <div className="nav secondary_bg rounded-lg p-6 flex flex-col gap-4">
        <div className="flex items-center gap-1">
          <FaSpotify className="font-bold text-xl" />
          <p>Spotify</p>
        </div>
        <div className="flex items-center gap-4">
          <FaHome className="font-bold text-xl" />
          <p>Home</p>
        </div>
        <div className="flex items-center gap-4">
          <FaSearch className="text-xl text_secondary" />
          <p className="text_secondary">Search</p>
        </div>
      </div>

      <div className="your_library mt-2 secondary_bg rounded-lg ">
        <div className="flex justify-between items-center gap-4 px-4 py-2 recent-div">
          <div className="flex items-center gap-2">
            <BiLibrary className="text-base text_secondary" />
            <p className="text_secondary">Your Library</p>
          </div>
          <div className="flex items-center gap-4">
            <Button className="cursor-pointer secondary_bg hover:bg-black rounded-[50%] p-3">
              <FaPlus className="text_secondary text-base" />
            </Button>
            <Button className="cursor-pointer secondary_bg hover:bg-black rounded-[50%] p-3">
              <FaArrowRight className="text_secondary text-base" />
            </Button>
          </div>
        </div>

        {/* <div className="flex flex-col mx-4 my-2 px-2">
          <Carousel opts={{ align: "start" }} className="w-full max-w-sm text-nowrap">
            <CarouselContent>
              {carousel_menu.map((title) => (
                <CarouselItem key={title} className="md:basis-1/2 lg:basis-1/3 pl-0">
                  <div className="p-1">
                    <Card className="h-8 rounded-[50px] flex justify-between items-center tertiary_bg border-none">
                      <CardContent className="p-0 m-auto">
                        <span className="body-regular text_primary">
                          {title}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="tertiary_bg left-[-1.2rem]" />
            <CarouselNext className="tertiary_bg right-[-10px]" />
          </Carousel>
        </div> */}

          <div className="flex mt w-full flex-col px-2 gap-2">
            {/* <div className="flex items-center justify-between w-full">
              <Button className="p-0">
                <FaSearch className="text-base text_secondary" />
              </Button>
              <div className="flex items-center gap-1">
                <p className="body-regular text_secondary">Recents</p>
                <IoIosMenu className="text-base text_secondary" />
              </div>
            </div> */}

            {/* <div>
                {
                  playlists.map(item => 
                    <div className="flex gap-2 p-2">
                      <div>
                        <img src={`/images/playlist/${item.image}`} width={48} height={48} alt="playlist-thumbnail"  />
                      </div>
                      <div className="flex-grow">
                        <p>{item.name}</p>
                        <p className="body-regular text_secondary">Playlist . {item.userId}</p>
                      </div>
                    </div>
                  )
                }
            </div> */}

            <div className="flex flex-col gap-2 h-[18rem] overflow-y-auto">
              <div className="tertiary_bg py-4 px-5 my-2 leading-normal flex flex-col gap-5 rounded-[8px]">
                <div>
                  <p>Create your first playlist</p>
                  <p className="body-regular">its easy, we'll help you</p>
                </div>
                <div className="bg-white rounded-full w-fit">
                  <Button className="px-4 py-1 text-black">
                    <span className="body-regular">Create playlist</span>
                  </Button>
                </div>
              </div>

              <div className="tertiary_bg py-4 px-5 my-2 leading-normal flex flex-col gap-5 rounded-[8px]">
                <div>
                  <p>Let's find some podcasts to follow</p>
                  <p className="body-regular">We'll keep you updated on new episodes</p>
                </div>
                <div className="bg-white rounded-full w-fit">
                  <Button className="px-4 py-1 text-black">
                    <span className="body-regular">Browse podcasts</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="sidebar-footer">
              <div className="my-8 px-6">
                <div className="mb-2 flex justify-between flex-wrap gap-3 subtle-medium text_secondary">
                  <p className="mb-2">Leagal</p>
                  <p className="mb-2">Privacy Center</p>
                  <p className="mb-2">Privacy Policy</p>
                  <p className="mb-2 flex-1">Cookies</p>
                  <p className="mb-2">About Ads</p>
                  <p className="mb-2 flex-1">Accessibility</p>
                </div>
                <p className="subtle-medium text_secondary">Cookies</p>
              </div>
              <div className="mb-8 px-6">
                <Button className="body-semibold rounded-full border py-[3px]">
                  <FiGlobe className="mr-1" />
                  <span>English</span>
                </Button>
              </div>
            </div>
          </div>
      </div>

      <Signup />
    </div>
    
  );
};

export default Sidebar;
