// Define types for the navigation links and content
export interface NavLinkContent {
  name: string;
  href: string;
  innerContent?: NavLinkContent[];
}

interface NavLink {
  name: string;
  href: string;
  content: NavLinkContent[];
  innerContent?: NavLinkContent[];
}

export const navLinks: NavLink[] = [
  {
    name: "Shop",
    href: "#shop",
    content: [
      {
        name: "Women",
        href: "#all-products",
        innerContent: [
          { name: "Shop All", href: "#shop-all" },
          { name: "Shoes", href: "#shoes" },
          { name: "Apparel", href: "#apparel" },
          { name: "Accessories", href: "#accessories" },
          { name: "New Arrivals", href: "#new-arrivals" },
          { name: "Last Season", href: "#last-season" },
          { name: "Shop Pre-Owned", href: "#shop-pre-owned" },
        ],
      },
      {
        name: "Men",
        href: "#new-arrivals",
        innerContent: [
          { name: "Shop All", href: "#shop-all" },
          { name: "Shoes", href: "#shoes" },
          { name: "Apparel", href: "#apparel" },
          { name: "Accessories", href: "#accessories" },
          { name: "New Arrivals", href: "#new-arrivals" },
          { name: "Last Season", href: "#last-season" },
          { name: "Shop Pre-Owned", href: "#shop-pre-owned" },
        ],
      },
      {
        name: "Kids",
        href: "#best-sellers",
        innerContent: [
          { name: "Shop All", href: "#shop-all" },
          { name: "Shoes", href: "#shoes" },
          { name: "Apparel", href: "#apparel" },
          { name: "Accessories", href: "#accessories" },
          { name: "New Arrivals", href: "#new-arrivals" },
          { name: "Last Season", href: "#last-season" },
          { name: "Shop Pre-Owned", href: "#shop-pre-owned" },
        ],
      },
      {
        name: "Shop All",
        href: "#sale",
        innerContent: [
          { name: "Shop All", href: "#shop-all" },
          { name: "Shoes", href: "#shoes" },
          { name: "Apparel", href: "#apparel" },
          { name: "Accessories", href: "#accessories" },
          { name: "New Arrivals", href: "#new-arrivals" },
          { name: "Last Season", href: "#last-season" },
          { name: "Shop Pre-Owned", href: "#shop-pre-owned" },
        ],
      },
      {
        name: "Featured",
        href: "#gift-cards",
        innerContent: [
          { name: "Shop All", href: "#shop-all" },
          { name: "Shoes", href: "#shoes" },
          { name: "Apparel", href: "#apparel" },
          { name: "Accessories", href: "#accessories" },
          { name: "New Arrivals", href: "#new-arrivals" },
          { name: "Last Season", href: "#last-season" },
          { name: "Shop Pre-Owned", href: "#shop-pre-owned" },
        ],
      },
    ],
  },
  {
    name: "Activities",
    href: "#activities",
    content: [
      { name: "Workshops", href: "#workshops" },
      { name: "Events", href: "#events" },
      { name: "Classes", href: "#classes" },
      { name: "Parties", href: "#parties" },
    ],
  },
  {
    name: "Explore",
    href: "#explore",
    content: [
      { name: "About Us", href: "#about-us" },
      { name: "Contact", href: "#contact" },
      { name: "FAQ", href: "#faq" },
      { name: "Blog", href: "#blog" },
    ],
  },
];
