import React, { ReactElement } from 'react'
import Navbar from '~/components/global/Navbar'
import SideBar from '~/components/global/Sidebar'

type Props = {
    children:React.ReactNode
}

function Layout({children}: Props): ReactElement {
    return (
      <>
      <SideBar children={children}/>
      </>
    )
}

export default Layout
