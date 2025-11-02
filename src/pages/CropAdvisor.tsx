import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import { Mic, Search, Droplets, ThermometerSun, CloudRain, Leaf, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const CropAdvisor = () => {
  const currentLanguage = localStorage.getItem("appLanguage") || "en";
  const [cropName, setCropName] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [cropInfo, setCropInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const content = {
    en: {
      title: "Crop Advisor",
      subtitle: "Get AI-powered recommendations for your crops",
      placeholder: "Enter crop name (e.g., Rice, Wheat, Tomato)",
      search: "Search",
      voice: "Voice Input",
      soilPh: "Soil pH",
      temperature: "Temperature",
      rainfall: "Rainfall",
      fertilizer: "Fertilizer",
      profit: "Expected Profit",
    },
    kn: {
      title: "ಬೆಳೆ ಸಲಹೆಗಾರ",
      subtitle: "ನಿಮ್ಮ ಬೆಳೆಗಳಿಗೆ AI-ಚಾಲಿತ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ",
      placeholder: "ಬೆಳೆ ಹೆಸರು ನಮೂದಿಸಿ (ಉದಾ: ಅಕ್ಕಿ, ಗೋಧಿ, ಟೊಮೇಟೊ)",
      search: "ಹುಡುಕಿ",
      voice: "ಧ್ವನಿ ಇನ್‌ಪುಟ್",
      soilPh: "ಮಣ್ಣಿನ pH",
      temperature: "ತಾಪಮಾನ",
      rainfall: "ಮಳೆ",
      fertilizer: "ರಸಗೊಬ್ಬರ",
      profit: "ನಿರೀಕ್ಷಿತ ಲಾಭ",
    },
    hi: {
      title: "फसल सलाहकार",
      subtitle: "अपनी फसलों के लिए AI-संचालित सिफारिशें प्राप्त करें",
      placeholder: "फसल का नाम दर्ज करें (जैसे: चावल, गेहूं, टमाटर)",
      search: "खोजें",
      voice: "वॉयस इनपुट",
      soilPh: "मिट्टी pH",
      temperature: "तापमान",
      rainfall: "वर्षा",
      fertilizer: "उर्वरक",
      profit: "अपेक्षित लाभ",
    },
    te: {
      title: "పంట సలహాదారు",
      subtitle: "మీ పంటలకు AI-శక్తితో సిఫార్సులను పొందండి",
      placeholder: "పంట పేరు నమోదు చేయండి (ఉదా: బియ్యం, గోధుమ, టమోటా)",
      search: "వెతకండి",
      voice: "వాయిస్ ఇన్‌పుట్",
      soilPh: "నేల pH",
      temperature: "ఉష్ణోగ్రత",
      rainfall: "వర్షపాతం",
      fertilizer: "ఎరువు",
      profit: "ఆశించిన లాభం",
    },
    ta: {
      title: "பயிர் ஆலோசகர்",
      subtitle: "உங்கள் பயிர்களுக்கு AI-இயக்கப்பட்ட பரிந்துரைகளைப் பெறுங்கள்",
      placeholder: "பயிர் பெயரை உள்ளிடவும் (எ.கா: அரிசி, கோதுமை, தக்காளி)",
      search: "தேடு",
      voice: "குரல் உள்ளீடு",
      soilPh: "மண் pH",
      temperature: "வெப்பநிலை",
      rainfall: "மழை",
      fertilizer: "உரம்",
      profit: "எதிர்பார்க்கப்படும் லாபம்",
    },
  };

  const t = content[currentLanguage as keyof typeof content];

  // Mock crop data - in real app, this would come from backend
  const mockCropData: any = {
    rice: {
      soilPh: "5.5-6.5",
      temperature: "20-35°C",
      rainfall: "1000-2000mm",
      fertilizer: "NPK 20:10:10",
      profit: "₹40,000-60,000 per acre",
    },
    wheat: {
      soilPh: "6.0-7.5",
      temperature: "10-25°C",
      rainfall: "300-400mm",
      fertilizer: "NPK 18:18:18",
      profit: "₹35,000-50,000 per acre",
    },
    tomato: {
      soilPh: "6.0-7.0",
      temperature: "20-30°C",
      rainfall: "600-800mm",
      fertilizer: "NPK 19:19:19",
      profit: "₹80,000-120,000 per acre",
    },
  };

  const handleSearch = () => {
    if (!cropName.trim()) {
      toast.error("Please enter a crop name");
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const normalizedName = cropName.toLowerCase().trim();
      const data = mockCropData[normalizedName] || mockCropData.rice;
      setCropInfo(data);
      setLoading(false);
      toast.success("Crop information loaded!");
    }, 1000);
  };

  const handleVoiceInput = () => {
    setIsListening(true);
    toast.info("Voice input feature coming soon! Will integrate with Whisper API.");
    setTimeout(() => setIsListening(false), 2000);
  };

  const recommendations = [
    { icon: Droplets, label: t.soilPh, key: "soilPh" },
    { icon: ThermometerSun, label: t.temperature, key: "temperature" },
    { icon: CloudRain, label: t.rainfall, key: "rainfall" },
    { icon: Leaf, label: t.fertilizer, key: "fertilizer" },
    { icon: TrendingUp, label: t.profit, key: "profit" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation currentLanguage={currentLanguage} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-in fade-in-50 slide-in-from-top-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{t.title}</h1>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>

          <Card className="shadow-[var(--shadow-soft)] border-2 border-border">
            <CardHeader>
              <CardTitle>Search Crop</CardTitle>
              <CardDescription>Enter a crop name or use voice input</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder={t.placeholder}
                  value={cropName}
                  onChange={(e) => setCropName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="h-12 border-2 focus:border-primary"
                />
                <Button
                  onClick={handleVoiceInput}
                  variant="outline"
                  size="icon"
                  className={`h-12 w-12 ${isListening ? "bg-destructive text-destructive-foreground" : ""}`}
                >
                  <Mic className="h-5 w-5" />
                </Button>
                <Button
                  onClick={handleSearch}
                  disabled={loading}
                  className="h-12 px-8 bg-primary hover:bg-primary/90"
                >
                  <Search className="h-5 w-5 mr-2" />
                  {t.search}
                </Button>
              </div>
            </CardContent>
          </Card>

          {cropInfo && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
              {recommendations.map((rec, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/30"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <rec.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{rec.label}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-foreground">
                      {cropInfo[rec.key]}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <footer className="bg-secondary text-secondary-foreground py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© 2025 Namma Krushi — Smart, Sustainable, and Local 🌿</p>
        </div>
      </footer>
    </div>
  );
};

export default CropAdvisor;
