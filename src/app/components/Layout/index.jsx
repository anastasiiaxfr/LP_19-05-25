import Header from "./TheHeader";
import Footer from "./TheFooter";

function Layout({ children }) {
  return (
    <div className="page_wrapper">
      <div className="page">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
