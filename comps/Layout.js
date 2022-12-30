import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-body bg-gray-100">
      <Navbar />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
