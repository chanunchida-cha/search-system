import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import Navbar from '~/components/global/Navbar'
import SideBar from '~/components/global/Sidebar'

type Props = {
    children:React.ReactNode
}

function Layout({children}: Props): ReactElement {
  const route = useRouter();
  const pathLogin = route.pathname.startsWith("/login")
    return (
      <>
      {pathLogin ? children : <SideBar children={children}/>}
      </>
    )
}

export default Layout
