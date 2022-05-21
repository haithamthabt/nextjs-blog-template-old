import Link from "next/link";
import { LOGO_TEXT } from "@_data/config/settings";
import { TOP_NAV_MENU_ITEMS } from "@_data/config/settings";

export default function Header() {




  return (
    <header className="bg-gray-900 text-gray-100 shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <img
              src="/assets/images/logo.png"
              width={40}
              height={40}
              alt="logo"
            />
            <span className="ml-3 text-xl">{LOGO_TEXT}</span>
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
          {Object.keys(TOP_NAV_MENU_ITEMS).map((item_name) => (

            <Link href={`/${TOP_NAV_MENU_ITEMS[item_name]}`}>
              <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">{item_name}</a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}



