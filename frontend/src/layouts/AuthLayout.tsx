import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";

function Navbar() {
  return (
    <nav className="border-b p-2 sticky top-0 left-0 backdrop-blur-sm bg-white/50 z-50">
      <div className="flex items-center gap-2 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <h3 className="text-xl font-cal-sans tracking-tight font-bold">
            Learn Loop
          </h3>
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  const portfolioUrl = import.meta.env.VITE_APP_PORTFOLIO_URL;

  return (
    <footer className="bg-footer border-t border-footer-border">
      <div className="p-10">
        <div className="flex flex-col gap-2 max-w-7xl mx-auto text-footer-foreground">
          <Logo className="w-fit" />
          <div>
            <h4 className="text-xl font-cal-sans tracking-tight">Learn Loop</h4>
            <p className="text-muted text-sm">
              Learn, teach, and grow with a modern learning platform designed
              for students and educators.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-footer-border">
        <div className="flex justify-between items-center gap-2 text-sm py-3 text-footer-foreground max-w-7xl mx-auto xl:px-0 sm:px-6 px-4">
          <span>&copy; Copyrights Reserved</span>
          <span>
            Made with ❤️ by{" "}
            <Link
              to={portfolioUrl}
              className="hover:underline hover:text-accent transition-colors"
            >
              Shivam
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

function AuthLayout() {
  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden">
        <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(60.92% 0.214 256.89 / 0.5), transparent 60%)",
        }}
      />
        <div className="min-h-screen w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AuthLayout;
