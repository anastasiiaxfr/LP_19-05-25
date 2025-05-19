import Link from "next/link";
import Logo from "./Logo";

const menu = [
  {
    group: "About us",
    items: [
      { url: "/", title: "Investors" },
      { url: "/", title: "Features" },
      { url: "/", title: "Book a demo" },
      { url: "/", title: "Security " },
    ],
  },
  {
    group: "Products",
    items: [
      { url: "/", title: "Credits Cards" },
      { url: "/", title: "Gift Cards" },
      { url: "/", title: "Savings accounts" },
      { url: "/", title: "NFT" },
    ],
  },
  {
    group: "Useful Links",
    items: [
      { url: "/", title: "Free rewards" },
      { url: "/", title: "Documentation" },
      { url: "/", title: "Affiliate program" },
    ],
  },
  {
    group: "Social",
    items: [
      { url: "/", title: "Changelog" },
      { url: "/", title: "License" },
      { url: "/", title: "Site Maps" },
      { url: "/", title: "News" },
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div>
            <Logo />
            <p className="pt-4 opacity-50">
              Discover the power of our secure and rewarding credit cards
            </p>
          </div>
          <div className="footer_menu">
            {menu.map((i, ind) => (
              <div key={ind}>
                <h3 className="text-lg font-semibold">{i.group}</h3>
                <nav className="mt-5">
                  {i.items.map((j, ind) => (
                    <Link key={ind} href={j.url}>
                      {j.title}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer_btm">
        <div className="container">
          <p>&copy; 2025 DoraDesign All Rights Reserved</p>
          <p>This page uses cookies. See cookies details here </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
