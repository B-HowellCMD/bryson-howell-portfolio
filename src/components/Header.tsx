import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-gb-header p-4 shadow-gb-card">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        		<h1 className="text-2xl font-bold text-white">Bryson Howell</h1>
        <nav className="hidden md:flex space-x-6">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            About
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/20">
            Projects
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/20">
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};