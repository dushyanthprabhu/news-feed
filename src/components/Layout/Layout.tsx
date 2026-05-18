import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RecentFeed from "../RecentFeed/RecentFeed";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex gap-30 justify-center py-16">
        <div className="w-3/4 mx-12">{children}</div>
        <RecentFeed />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
