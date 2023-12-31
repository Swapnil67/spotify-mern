import { Button } from "../ui/button"

const Signup = () => {
  return (
    <div className="fixed bottom-2 signup_bar primary-gradient w-full">
      <div className="pt-3 pb-2 pl-3 pr-8 flex items-center justify-between">
        <div>
          <p className="small-regular uppercase tracking-widest">Preview of Spotify</p>
          <p className="paragraph-semibold">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <div>
          <Button className="bg-white text-black rounded-full px-4 py-2">
            Sign up for free
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Signup