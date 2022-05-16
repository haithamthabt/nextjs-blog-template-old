import Link from "next/link";
import { LOGO_TEXT } from "@_data/config/index";
import { COPYRIGHT_YEARS } from "@_data/config/index";
import { WEBSITE_URL } from "@_data/config/index";

export default function Footer() {
  return (
    <footer class="text-center bg-gray-900 text-white">
      <div class="px-6 pt-6">
        <div class="grid lg:grid-cols-4 md:grid-cols-2">
          <div class="mb-6">
            <h5 class="uppercase font-bold mb-2.5"></h5>

            <ul class="list-none mb-0">
              <li>
                <Link href="/about">
                  <a class="text-white">
                    About Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div class="mb-6">
            <h5 class="uppercase font-bold mb-2.5"></h5>

            <ul class="list-none mb-0">
              <li>
                <Link href="/contact">
                  <a class="text-white">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div class="mb-6">
            <h5 class="uppercase font-bold mb-2.5"></h5>

            <ul class="list-none mb-0">
              <li>
                <Link href="/blog">
                  <a class="text-white">
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div class="mb-6">
            <h5 class="uppercase font-bold mb-2.5"></h5>

            <ul class="list-none mb-0">
              <li>
                <Link href="/">
                  <a class="text-white">
                    Home
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center p-4"> © {COPYRIGHT_YEARS} 
        <Link href={WEBSITE_URL}>
          <a class="text-white">{LOGO_TEXT}</a>
        </Link>
      </div>
    </footer>
  );
}
