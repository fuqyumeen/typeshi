import { Link, Outlet, useLocation } from "react-router-dom";

function BlogLayout(){
  const location = useLocation();
  const getProfileColor = ()=>{
    switch(location.pathname.toLowerCase()){
      case "/amaan":
        return "bg-black";
      case "/rishabh":
        return "bg-black"
      case "/sulabh":
        return "bg-black";
      default:
        return "bg-black";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#dafb2b] text-gray-900">

      {/* Centered website container */}                            
      <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 flex flex-1 flex-col ${getProfileColor()}`}>

        {/* Header */}
        <header className="w-full px-4 sm:px-6 py-5">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 pt-6">

    {/* Logo */}
    <Link
      to="/"
      className="text-xl sm:text-2xl font-bold tracking-tight text-white/50 whitespace-nowrap"
    >
      &lt; LORE & LARP &gt;
    </Link>

    {/* Navigation */}
    <nav className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3 text-xs sm:text-sm font-medium text-white/50 ">

      <Link to="/" className="transition hover:text-blue-400">
        HOME
      </Link>

      <Link to="/amaan" className="transition hover:text-blue-400">
        AMAANMIA
      </Link>

      <Link to="/rishabh" className="transition hover:text-blue-400">
        RISHABHJANU
      </Link>

      <Link to="/sulabh" className="transition hover:text-blue-400">
        SULLUBHOI
      </Link>

    </nav>
  </div>
</header>


        {/* Page content */}
        <main className="min-h-[75vh] py-10 sm:py-14 ">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          My Blog © 2026
        </footer>

      </div>
    </div>
  );
}

export default BlogLayout;
