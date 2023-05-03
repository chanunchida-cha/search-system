/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
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

  return <div>{pathLogin ? children : <SideBar children={children} />}</div>;
}

export default Layout;
