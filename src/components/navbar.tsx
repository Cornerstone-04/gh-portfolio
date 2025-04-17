import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { motion } from "framer";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Repository", path: "/repositories" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-6 px-4 sm:px-10 flex items-center justify-between"
    >
      <Link to="/" className="text-sm font-mono tracking-wide">
        The__4thEphraim
      </Link>
      <div className="flex gap-6 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "hover:underline transition-all duration-200",
              location.pathname === link.path && "text-white underline"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
