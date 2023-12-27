import SidebarItems from '../components/SidebarItems'

const HomePage = () => {
  return (
    <div className='flex'>
      <SidebarItems />
      <div className='flex justify-center items-center h-screen'>
        <h5 className='text-center'>HomePage</h5>
      </div>
    </div>
  )
}

export default HomePage
