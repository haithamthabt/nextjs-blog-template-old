export const POSTS_PER_PAGE_BLOG = 3;
export const POSTS_PER_PAGE_HOME = 6;
export const LOGO_TEXT = "NEXTjs.net";
export const CONTACT_EMAIL = "contactform@nextjs.net"
export const WEBSITE_DIRECTION = "ltr" // to make the website right to left change this to rtl
export const COPYRIGHT_INIT_YEAR = "2014";
export const WEBSITE_URL = "https://nextjs.net/";




//Here where you set/change Items of the nav menu on the top right of the website
//Left side is the display text, and the right side is the slug/link/url of the page
export const TOP_NAV_MENU_ITEMS = {
    'Blog': 'blog', 
    'Tutorials': 'tutorials', 
    'About Us': 'about-us', 
    'Authors': 'authors',
};


//Here where you set/change Items of the footer
//Left side is the display text, and the right side is the slug/link/url of the page
export const FOOTER_MENU_ITEMS = {
    'About Us': 'about-us',
    'Tutorials': 'tutorials', 
    'Blog': 'blog',
    'Home': 'home'
};



//Here where you set/change color of the categories in blog
//Left side is the display text, and the right side is the color code
//color code is based on the tailwind framework
//NOTE: Category Key is case sensative, it should be exctly as it is writen in the post file
//Other wise, color will be very light gray
export const BLOG_CATEGORY_COLOR_KEY = {
    JavaScript: "bg-yellow-600",
    CSS: "bg-blue-600",
    Python: 'bg-green-600',
    PHP: 'bg-purple-600',
    Ruby: 'bg-red-600',
  }














