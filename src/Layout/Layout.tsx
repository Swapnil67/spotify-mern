import Sidebar from "../components/Sidebar/Sidebar"

const Layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="w-3/4">
        {children}
      </div>
    </div>
  )
}

export default Layout