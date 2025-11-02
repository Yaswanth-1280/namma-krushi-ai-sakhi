import { Link, useLocation } from "react-router-dom";
import { Sprout, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

interface NavigationProps {
  currentLanguage: string;
}

const Navigation = ({ currentLanguage }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/home", label: { en: "Home", kn: "ಮುಖಪುಟ", hi: "होम", te: "హోమ్", ta: "முகப்பு" } },
    { path: "/advisor", label: { en: "Crop Advisor", kn: "ಬೆಳೆ ಸಲಹೆಗಾರ", hi: "फसल सलाहकार", te: "పంట సలహాదారు", ta: "பயிர் ஆலோசகர்" } },
    { path: "/market", label: { en: "Market", kn: "ಮಾರುಕಟ್ಟೆ", hi: "बाज़ार", te: "మార్కెట్", ta: "சந்தை" } },
    { path: "/learn", label: { en: "Learn", kn: "ಕಲಿ", hi: "सीखें", te: "నేర్చుకో", ta: "கற்றுக்கொள்" } },
    { path: "/about", label: { en: "About", kn: "ನಮ್ಮ ಬಗ್ಗೆ", hi: "हमारे बारे में", te: "మా గురించి", ta: "எங்களை பற்றி" } },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/home" className="flex items-center gap-2 group">
            <Sprout className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold text-foreground">Namma Krushi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label[currentLanguage as keyof typeof item.label]}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {item.label[currentLanguage as keyof typeof item.label]}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
