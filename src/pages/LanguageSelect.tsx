import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Globe } from "lucide-react";

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const navigate = useNavigate();

  const languages = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
    { code: "hi", name: "Hindi", nativeName: "हिंदी" },
    { code: "te", name: "Telugu", nativeName: "తెలుగు" },
    { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  ];

  const handleContinue = () => {
    localStorage.setItem("appLanguage", selectedLanguage);
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-muted/30 p-4">
      <Card className="w-full max-w-md shadow-[var(--shadow-soft)] animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Sprout className="h-12 w-12 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Namma Krushi
          </CardTitle>
          <CardDescription className="text-base">
            Where AI Cultivates Growth 🌾
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-medium flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              Select Your Language
            </label>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-full h-12 bg-card border-2 border-border hover:border-primary transition-colors">
                <SelectValue placeholder="Choose language" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-2 border-border">
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code} className="cursor-pointer hover:bg-muted">
                    <span className="font-medium">{lang.nativeName}</span>
                    <span className="text-muted-foreground ml-2">({lang.name})</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleContinue}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base shadow-md hover:shadow-lg transition-all"
          >
            Continue to App
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Smart, Sustainable, and Local 🌿
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LanguageSelect;
