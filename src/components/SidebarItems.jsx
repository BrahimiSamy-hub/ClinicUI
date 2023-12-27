import Sidebar, { SidebarItem } from '../components/Sidebar'
import { useLocation } from 'react-router-dom'
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
} from 'lucide-react'
const SidebarItems = () => {
  const location = useLocation()

  const checkActive = (path) => {
    return location.pathname === path
  }
  return (
    <Sidebar>
      <SidebarItem
        icon={<LayoutDashboard size={20} />}
        text='Dashboard'
        to='/'
        alert
        active={checkActive('/home')}
      />
      <SidebarItem
        icon={<BarChart3 size={20} />}
        text='Statistics'
        to='/statistics'
        active={checkActive('/statistics')}
      />
      <SidebarItem
        icon={<UserCircle size={20} />}
        text='Patient'
        to='/patient'
        active={checkActive('/patient')}
      />
      <SidebarItem
        icon={<Boxes size={20} />}
        text='Inventory'
        to='/facture'
        active={checkActive('/facture')}
      />
      <SidebarItem
        icon={<Package size={20} />}
        text='Orders'
        to='/anything'
        active={checkActive('/anything')}
      />
      <SidebarItem
        icon={<Receipt size={20} />}
        text='Billings'
        to='/settings'
        active={checkActive('/settings')}
      />
      <hr className='my-3' />
      <SidebarItem
        icon={<LifeBuoy size={20} />}
        text='Help'
        to='/help'
        active={checkActive('/help')}
      />
    </Sidebar>
  )
}

export default SidebarItems
