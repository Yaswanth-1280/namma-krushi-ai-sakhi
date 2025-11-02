import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import { BookOpen, Droplet, Sprout, Sun, Wind, Zap } from "lucide-react";

const Learn = () => {
  const currentLanguage = localStorage.getItem("appLanguage") || "en";

  const content = {
    en: {
      title: "Learn Farming",
      subtitle: "Access expert tips and sustainable farming practices",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
    },
    kn: {
      title: "ಕೃಷಿ ಕಲಿಯಿರಿ",
      subtitle: "ತಜ್ಞರ ಸಲಹೆಗಳು ಮತ್ತು ಸುಸ್ಥಿರ ಕೃಷಿ ಅಭ್ಯಾಸಗಳನ್ನು ಪ್ರವೇಶಿಸಿ",
      beginner: "ಹರಿಕಾರ",
      intermediate: "ಮಧ್ಯಮ",
      advanced: "ಮುಂದುವರಿದ",
    },
    hi: {
      title: "खेती सीखें",
      subtitle: "विशेषज्ञ सुझाव और टिकाऊ खेती प्रथाओं तक पहुंचें",
      beginner: "शुरुआती",
      intermediate: "मध्यम",
      advanced: "उन्नत",
    },
    te: {
      title: "వ్యవసాయం నేర్చుకోండి",
      subtitle: "నిపుణుల చిట్కాలు మరియు స్థిరమైన వ్యవసాయ పద్ధతులను యాక్సెస్ చేయండి",
      beginner: "ప్రారంభకులు",
      intermediate: "మధ్యస్థ",
      advanced: "అధునాతన",
    },
    ta: {
      title: "விவசாயம் கற்றுக்கொள்ளுங்கள்",
      subtitle: "நிபுணர் குறிப்புகள் மற்றும் நிலையான விவசாய நடைமுறைகளை அணுகவும்",
      beginner: "தொடக்கநிலை",
      intermediate: "இடைநிலை",
      advanced: "மேம்பட்ட",
    },
  };

  const t = content[currentLanguage as keyof typeof content];

  const learningModules = [
    {
      icon: Droplet,
      title: "Drip Irrigation Basics",
      description: "Learn how to conserve water and improve crop yield with modern drip irrigation systems.",
      level: t.beginner,
      duration: "15 min",
      color: "text-blue-500 bg-blue-500/10",
    },
    {
      icon: Sprout,
      title: "Organic Composting",
      description: "Master the art of creating nutrient-rich compost from farm waste for healthier soil.",
      level: t.intermediate,
      duration: "20 min",
      color: "text-green-500 bg-green-500/10",
    },
    {
      icon: Sun,
      title: "Crop Rotation Strategies",
      description: "Understand how to maximize soil health and prevent pest buildup through smart rotation.",
      level: t.advanced,
      duration: "25 min",
      color: "text-yellow-500 bg-yellow-500/10",
    },
    {
      icon: Wind,
      title: "Natural Pest Control",
      description: "Discover eco-friendly methods to protect your crops without harmful chemicals.",
      level: t.beginner,
      duration: "18 min",
      color: "text-purple-500 bg-purple-500/10",
    },
    {
      icon: Zap,
      title: "IoT in Agriculture",
      description: "Explore how smart sensors and automation can optimize your farming operations.",
      level: t.advanced,
      duration: "30 min",
      color: "text-orange-500 bg-orange-500/10",
    },
    {
      icon: BookOpen,
      title: "Seasonal Planting Guide",
      description: "Learn the best times to plant different crops based on climate and soil conditions.",
      level: t.intermediate,
      duration: "22 min",
      color: "text-pink-500 bg-pink-500/10",
    },
  ];

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
            {learningModules.map((module, index) => (
              <Card
                key={index}
                className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 cursor-pointer animate-in fade-in-50 slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-lg ${module.color} group-hover:scale-110 transition-transform`}>
                      <module.icon className="h-7 w-7" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {module.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                    {module.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">💡 AI-Powered Learning Tips</CardTitle>
              <CardDescription className="text-base">
                Our AI analyzes your farming patterns and recommends personalized learning modules to help you grow smarter!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Track your progress across different modules</li>
                <li>✓ Get real-time farming advice based on weather conditions</li>
                <li>✓ Connect with expert farmers in your region</li>
                <li>✓ Earn certificates for completed courses</li>
              </ul>
            </CardContent>
          </Card>
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

export default Learn;
