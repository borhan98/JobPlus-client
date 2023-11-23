import {
  RiTwitterXFill,
  RiFacebookFill,
  RiYoutubeFill,
  RiLinkedinFill,
  RiAppleFill,
  RiGooglePlayFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="bg-[#2B3940] py-14 mt-6">
        <div className="container mx-auto px-2 lg:px-0 grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Job<span className="text-[#FF5200]">Plus</span>
            </h2>
            <p className="text-zinc-300">
              Sector #7, Uttara, Dhaka, Bangladesh
            </p>
            <p className="text-zinc-300">
              Call: <a href="callto: +8801808000000">+8801808000000</a>
            </p>
            <p className="text-zinc-300">
              Email: <a href="mailto: info@jobplus.com">info@jobplus.com</a>
            </p>
            <div className="flex gap-3 text-zinc-300 mt-5">
              <span
                className="border p-2 text-lg duration-300 hover:bg-zinc-200 hover:text-[#FF5200]"
                title="Twitter"
              >
                <RiTwitterXFill />
              </span>
              <span
                className="border p-2 text-lg duration-300 hover:bg-zinc-200 hover:text-[#FF5200]"
                title="Facebook"
              >
                <RiFacebookFill />
              </span>
              <span
                className="border p-2 text-lg duration-300 hover:bg-zinc-200 hover:text-[#FF5200]"
                title="YouTube"
              >
                <RiYoutubeFill />
              </span>
              <span
                className="border p-2 text-lg duration-300 hover:bg-zinc-200 hover:text-[#FF5200]"
                title="LinkedIn"
              >
                <RiLinkedinFill />
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">FAQs</h3>
            <ul className="text-zinc-300 space-y-2">
              <li>
                -{" "}
                <span className="hover:tracking-wider duration-300">
                  About Us
                </span>
              </li>
              <li>
                -{" "}
                <span className="hover:tracking-wider duration-300">
                  Contact Us
                </span>
              </li>
              <li>
                -{" "}
                <span className="hover:tracking-wider duration-300">
                  Privacy & Security
                </span>
              </li>
              <li>
                -{" "}
                <span className="hover:tracking-wider duration-300">
                  Terms & Conditions
                </span>
              </li>
              <li>
                -{" "}
                <span className="hover:tracking-wider duration-300">
                  Supports
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">Find Jobs</h3>
            <ul className="text-zinc-300 space-y-2">
              <li>
                -{" "}
                <span className="hover:tracking-wider duration-300">
                  Remote
                </span>
              </li>
              <li>
                -{" "}
                <span className="hover:tracking-wider duration-300">
                  Hybrid
                </span>
              </li>
              <li>
                -{" "}
                <span className="hover:tracking-wider duration-300">
                  On Site
                </span>
              </li>
              <li>
                -{" "}
                <span className="hover:tracking-wider duration-300">
                  Part Time
                </span>
              </li>
              <li>
                -{" "}
                <span className="hover:tracking-wider duration-300">
                  Full Time
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex gap-2 items-center border p-2 rounded-md cursor-pointer mb-4">
              <span className="text-zinc-300 text-4xl">
                <RiAppleFill />
              </span>
              <div>
                <h3 className="text-zinc-200 font-semibold">App Store</h3>
                <p className="text-zinc-400 text-sm">Available now on the</p>
              </div>
            </div>
            <div className="flex gap-2 items-center border p-2 rounded-md cursor-pointer">
              <span className="text-zinc-300 text-4xl">
                <RiGooglePlayFill />
              </span>
              <div>
                <h3 className="text-zinc-200 font-semibold">Google Play</h3>
                <p className="text-zinc-400 text-sm">Get in on</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-800 py-5">
        <p className="text-center text-zinc-400">
          <small>&copy;2023 <a className="underline" href="#">JobPlus</a>. All Rights Reserved</small>
        </p>
      </div>
    </>
  );
};

export default Footer;
