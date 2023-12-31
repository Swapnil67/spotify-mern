import { FaPlay } from 'react-icons/fa'
import './Card.css'

const Card = () => {
  return (
    <div className="card flex flex-col p-4 cursor-pointer rounded-lg hover:tertiary_bg w-[200px]">
      <div className="relative mb-2 self-center rounded-sm drop-shadow-2xl">
        <img src={`/images/playlist/new-year.jpeg`} width={160} height={160} alt="playlist-thumbnail"  />
        <button className='play_btn absolute bottom-2 right-2 flex items-center rounded-[50%] justify-center p-3 bg-green-500'>
          <FaPlay className="text-black text-xl" />
        </button>
      </div>
      <div>
        <a href="#">New Year's Eve 2023</a>
        <div>
          <p className="line-clamp-2 body-regular text_secondary">Ring in 2024 with your favorite party tracks!</p>
        </div>
      </div>
    </div>
  )
}

export default Card