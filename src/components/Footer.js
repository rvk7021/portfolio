import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className=" pt-5 mx-auto">
      <div className="w-10/12  sm:grid sm:grid-cols-2 mx-auto gap-4">
        <div className="  flex justify-center "><SocialMedia/></div>
        <div className="font-mono  text-[20px] text-center">
          <p className="font-bold ">YOUR MAIL ID</p>
          <p className="m-3">&copy;2024 All Rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;