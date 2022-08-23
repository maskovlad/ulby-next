import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"maskovlad, nextjs" + keywords} />
        <title>Головна Next JS</title>
      </Head>

      <div className="navbar">
        <A href={"/"} text="Main" />
        <A href={"/users"} text="Users" />
      </div>
      <div>{children}</div>

      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
