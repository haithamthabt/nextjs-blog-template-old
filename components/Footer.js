import Link from "next/link";
import { LOGO_TEXT } from "@_data/config/settings";
import { COPYRIGHT_YEARS } from "@_data/config/settings";
import { FOOTER_MENU_ITEMS } from "@_data/config/settings";
import { WEBSITE_URL } from "@_data/config/settings";

export default function Footer() {


  console.log("===========================")
  console.log(FOOTER_MENU_ITEMS)
  return (
    <footer className="text-center bg-gray-900 text-white">
      <div className="px-6 pt-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2">

          {Object.keys(FOOTER_MENU_ITEMS).map((item_name, item_slug) => (

            <div className="mb-6">
              <ul className="list-none mb-0">
                <li>
                  <Link href={`/${item_slug}`}>
                    <a className="text-white">{item_name}</a>
                  </Link>
                </li>
              </ul>
            </div>

          ))}

        </div>
      </div>

      <div className="text-center p-4">
        {" "}
        © {COPYRIGHT_YEARS}
        <Link href={WEBSITE_URL}>
          <a className="text-white">{LOGO_TEXT}</a>
        </Link>
      </div>
    </footer>
  );
}
