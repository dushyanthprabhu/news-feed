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
      <div className="bg-zinc-300 flex gap-30 justify-center py-16">
        {children}
        <RecentFeed/>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
