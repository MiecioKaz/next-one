import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="font-body px-8 bg-gray-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
