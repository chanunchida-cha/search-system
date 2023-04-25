import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import Navbar from "~/components/global/Navbar";
import SideBar from "~/components/global/Sidebar";
import Cookie from "cookie-universal";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props): ReactElement {
  const route = useRouter();
  const pathLogin = route.pathname.startsWith("/login");
  const cookies = Cookie();
  const login = cookies.get("token");
  useEffect(() => {
    if (!login) {
      route.push("/login");
    }
  },[login]);

  return <>{pathLogin ? children : <SideBar children={children} />}</>;
}

export default Layout;
