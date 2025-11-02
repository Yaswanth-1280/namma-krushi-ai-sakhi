import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import { MapPin, Phone, TrendingUp, TrendingDown } from "lucide-react";
import { toast } from "sonner";

const Market = () => {
  const currentLanguage = localStorage.getItem("appLanguage") || "en";

  const content = {
    en: {
      title: "Market View",
      subtitle: "Connect with local farmers and find the best prices",
      connect: "Connect",
      location: "Location",
      price: "Price",
      trending: "Trending",
    },
    kn: {
      title: "ಮಾರುಕಟ್ಟೆ",
      subtitle: "ಸ್ಥಳೀಯ ರೈತರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ ಮತ್ತು ಉತ್ತಮ ಬೆಲೆಗಳನ್ನು ಹುಡುಕಿ",
      connect: "ಸಂಪರ್ಕಿಸಿ",
      location: "ಸ್ಥಳ",
      price: "ಬೆಲೆ",
      trending: "ಟ್ರೆಂಡಿಂಗ್",
    },
    hi: {
      title: "बाज़ार",
      subtitle: "स्थानीय किसानों से जुड़ें और सर्वोत्तम मूल्य खोजें",
      connect: "कनेक्ट करें",
      location: "स्थान",
      price: "कीमत",
      trending: "ट्रेंडिंग",
    },
    te: {
      title: "మార్కెట్",
      subtitle: "స్థానిక రైతులతో కనెక్ట్ అవ్వండి మరియు ఉత్తమ ధరలను కనుగొనండి",
      connect: "కనెక్ట్",
      location: "స్థానం",
      price: "ధర",
      trending: "ట్రెండింగ్",
    },
    ta: {
      title: "சந்தை",
      subtitle: "உள்ளூர் விவசாயிகளுடன் இணைந்து சிறந்த விலைகளைக் கண்டறியவும்",
      connect: "இணைக்கவும்",
      location: "இடம்",
      price: "விலை",
      trending: "டிரெண்டிங்",
    },
  };

  const t = content[currentLanguage as keyof typeof content];

  // Mock market data
  const marketListings = [
    {
      farmer: "Ravi Kumar",
      crop: "Rice",
      quantity: "500 kg",
      price: "₹35/kg",
      location: "Mysuru, Karnataka",
      trend: "up",
      change: "+5%",
    },
    {
      farmer: "Lakshmi Devi",
      crop: "Tomatoes",
      quantity: "200 kg",
      price: "₹25/kg",
      location: "Mandya, Karnataka",
      trend: "down",
      change: "-3%",
    },
    {
      farmer: "Suresh Gowda",
      crop: "Wheat",
      quantity: "1000 kg",
      price: "₹28/kg",
      location: "Hassan, Karnataka",
      trend: "up",
      change: "+8%",
    },
    {
      farmer: "Manjula Reddy",
      crop: "Onions",
      quantity: "300 kg",
      price: "₹40/kg",
      location: "Bangalore, Karnataka",
      trend: "up",
      change: "+12%",
    },
    {
      farmer: "Venkatesh Naik",
      crop: "Potatoes",
      quantity: "400 kg",
      price: "₹20/kg",
      location: "Tumkur, Karnataka",
      trend: "down",
      change: "-2%",
    },
    {
      farmer: "Asha Bai",
      crop: "Cabbage",
      quantity: "150 kg",
      price: "₹15/kg",
      location: "Shimoga, Karnataka",
      trend: "up",
      change: "+4%",
    },
  ];

  const handleConnect = (farmer: string) => {
    toast.success(`Contact request sent to ${farmer}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation currentLanguage={currentLanguage} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-in fade-in-50 slide-in-from-top-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{t.title}</h1>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketListings.map((listing, index) => (
              <Card
                key={index}
                className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 animate-in fade-in-50 slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{listing.crop}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {listing.location}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={listing.trend === "up" ? "default" : "secondary"}
                      className="flex items-center gap-1"
                    >
                      {listing.trend === "up" ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {listing.change}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Farmer:</span>
                      <span className="font-medium">{listing.farmer}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Quantity:</span>
                      <span className="font-medium">{listing.quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.price}:</span>
                      <span className="text-2xl font-bold text-primary">{listing.price}</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleConnect(listing.farmer)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {t.connect}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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

export default Market;
