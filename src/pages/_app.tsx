import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/layouts/Layout";
import "~/styles/globals.css";
// import { Prompt } from "@next/font/google";

// const prompt = Prompt({ weight: "400", subsets: ["thai", "latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
