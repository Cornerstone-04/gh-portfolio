import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-10 py-12 border-t border-white/10 text-sm">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Input
            placeholder="Write me an email..."
            className="w-full max-w-sm bg-transparent border-white/20 text-white"
          />
          <Button className="bg-blue-600 hover:bg-blue-700">Send</Button>
        </div>

        <div className="flex justify-center gap-8 text-white/80 mt-4">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
