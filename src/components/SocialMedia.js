const SocialMedia = () => {
  return (
    <div className="">
      <h1 className="text-center font-bold text-[20px]">Where to find me ?</h1>
      <div className="flex justify-center md:justify-start my-5 gap-7">
        <a
          className="w-8 h-8 hover:opacity-50 transition duration-500"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img alt="social-link" src="" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img alt="social-link" src="" className="w-8 h-8 md:hover:scale-110 rounded-md" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img alt="social-link" src="" className="w-8 h-8 md:hover:scale-110 rounded-md" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img alt="social-link" src="" className="w-8 h-8 md:hover:scale-110 rounded-md" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
