import Link from "next/link";
import { LOGO_TEXT } from "@_data/config/index";
import { COPYRIGHT_YEARS } from "@_data/config/index";
import { WEBSITE_URL } from "@_data/config/index";

export default function Footer() {
  return (
    <footer className="text-center bg-gray-900 text-white">
      <div className="px-6 pt-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2">
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5"></h5>

            <ul className="list-none mb-0">
              <li>
                <Link href="/about">
                  <a className="text-white">
                    About Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5"></h5>

            <ul className="list-none mb-0">
              <li>
                <Link href="/contact">
                  <a className="text-white">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5"></h5>

            <ul className="list-none mb-0">
              <li>
                <Link href="/blog">
                  <a className="text-white">
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5"></h5>

            <ul className="list-none mb-0">
              <li>
                <Link href="/">
                  <a className="text-white">
                    Home
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-4"> © {COPYRIGHT_YEARS} 
        <Link href={WEBSITE_URL}>
          <a className="text-white">{LOGO_TEXT}</a>
        </Link>
      </div>
    </footer>
  );
}
