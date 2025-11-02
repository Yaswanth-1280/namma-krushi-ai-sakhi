import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import { Sprout, TrendingUp, BookOpen, Mic } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import cropAdvisorImage from "@/assets/crop-advisor.jpg";
import marketImage from "@/assets/market.jpg";
import learnImage from "@/assets/learn.jpg";

const Home = () => {
  const currentLanguage = localStorage.getItem("appLanguage") || "en";

  const content = {
    en: {
      hero: "Where AI Cultivates Growth",
      subtitle: "Empowering farmers with smart insights, real-time data, and sustainable practices",
      features: "Our Features",
      advisor: "Crop Advisor",
      advisorDesc: "Get AI-powered recommendations for your crops",
      market: "Market View",
      marketDesc: "Connect with local farmers and find the best prices",
      learn: "Learn Farming",
      learnDesc: "Access expert tips and sustainable farming practices",
      voice: "AI Voice Assist",
      voiceDesc: "Speak your queries and get instant answers",
    },
    kn: {
      hero: "AI ಬೆಳೆಯನ್ನು ಬೆಳೆಸುತ್ತದೆ",
      subtitle: "ಸ್ಮಾರ್ಟ್ ಒಳನೋಟಗಳು, ನೈಜ-ಸಮಯ ಡೇಟಾ ಮತ್ತು ಸುಸ್ಥಿರ ಅಭ್ಯಾಸಗಳೊಂದಿಗೆ ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು",
      features: "ನಮ್ಮ ವೈಶಿಷ್ಟ್ಯಗಳು",
      advisor: "ಬೆಳೆ ಸಲಹೆಗಾರ",
      advisorDesc: "ನಿಮ್ಮ ಬೆಳೆಗಳಿಗೆ AI-ಚಾಲಿತ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ",
      market: "ಮಾರುಕಟ್ಟೆ",
      marketDesc: "ಸ್ಥಳೀಯ ರೈತರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ ಮತ್ತು ಉತ್ತಮ ಬೆಲೆಗಳನ್ನು ಹುಡುಕಿ",
      learn: "ಕೃಷಿ ಕಲಿಯಿರಿ",
      learnDesc: "ತಜ್ಞರ ಸಲಹೆಗಳು ಮತ್ತು ಸುಸ್ಥಿರ ಕೃಷಿ ಅಭ್ಯಾಸಗಳನ್ನು ಪ್ರವೇಶಿಸಿ",
      voice: "AI ಧ್ವನಿ ಸಹಾಯ",
      voiceDesc: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳನ್ನು ಹೇಳಿ ಮತ್ತು ತಕ್ಷಣದ ಉತ್ತರಗಳನ್ನು ಪಡೆಯಿರಿ",
    },
    hi: {
      hero: "जहाँ AI विकास को बढ़ावा देता है",
      subtitle: "स्मार्ट अंतर्दृष्टि, रीयल-टाइम डेटा और टिकाऊ प्रथाओं के साथ किसानों को सशक्त बनाना",
      features: "हमारी सुविधाएं",
      advisor: "फसल सलाहकार",
      advisorDesc: "अपनी फसलों के लिए AI-संचालित सिफारिशें प्राप्त करें",
      market: "बाज़ार",
      marketDesc: "स्थानीय किसानों से जुड़ें और सर्वोत्तम मूल्य खोजें",
      learn: "खेती सीखें",
      learnDesc: "विशेषज्ञ सुझाव और टिकाऊ खेती प्रथाओं तक पहुंचें",
      voice: "AI वॉयस सहायता",
      voiceDesc: "अपने प्रश्न बोलें और तुरंत उत्तर प्राप्त करें",
    },
    te: {
      hero: "AI వృద్ధిని పెంపొందిస్తుంది",
      subtitle: "స్మార్ట్ అంతర్దృష్టులు, రియల్-టైం డేటా మరియు స్థిరమైన పద్ధతులతో రైతులను శక్తివంతం చేయడం",
      features: "మా ఫీచర్లు",
      advisor: "పంట సలహాదారు",
      advisorDesc: "మీ పంటలకు AI-శక్తితో సిఫార్సులను పొందండి",
      market: "మార్కెట్",
      marketDesc: "స్థానిక రైతులతో కనెక్ట్ అవ్వండి మరియు ఉత్తమ ధరలను కనుగొనండి",
      learn: "వ్యవసాయం నేర్చుకోండి",
      learnDesc: "నిపుణుల చిట్కాలు మరియు స్థిరమైన వ్యవసాయ పద్ధతులను యాక్సెస్ చేయండి",
      voice: "AI వాయిస్ సహాయం",
      voiceDesc: "మీ ప్రశ్నలను మాట్లాడండి మరియు తక్షణ సమాధానాలను పొందండి",
    },
    ta: {
      hero: "AI வளர்ச்சியை வளர்க்கிறது",
      subtitle: "ஸ்மார்ட் நுண்ணறிவுகள், உண்மையான நேர தரவு மற்றும் நிலையான நடைமுறைகளுடன் விவசாயிகளை வலுப்படுத்துதல்",
      features: "எங்கள் அம்சங்கள்",
      advisor: "பயிர் ஆலோசகர்",
      advisorDesc: "உங்கள் பயிர்களுக்கு AI-இயக்கப்பட்ட பரிந்துரைகளைப் பெறுங்கள்",
      market: "சந்தை",
      marketDesc: "உள்ளூர் விவசாயிகளுடன் இணைந்து சிறந்த விலைகளைக் கண்டறியவும்",
      learn: "விவசாயம் கற்றுக்கொள்ளுங்கள்",
      learnDesc: "நிபுணர் குறிப்புகள் மற்றும் நிலையான விவசாய நடைமுறைகளை அணுகவும்",
      voice: "AI குரல் உதவி",
      voiceDesc: "உங்கள் கேள்விகளைப் பேசுங்கள் மற்றும் உடனடி பதில்களைப் பெறுங்கள்",
    },
  };

  const t = content[currentLanguage as keyof typeof content];

  const features = [
    {
      icon: Sprout,
      title: t.advisor,
      description: t.advisorDesc,
      link: "/advisor",
      image: cropAdvisorImage,
    },
    {
      icon: TrendingUp,
      title: t.market,
      description: t.marketDesc,
      link: "/market",
      image: marketImage,
    },
    {
      icon: BookOpen,
      title: t.learn,
      description: t.learnDesc,
      link: "/learn",
      image: learnImage,
    },
    {
      icon: Mic,
      title: t.voice,
      description: t.voiceDesc,
      link: "/advisor?voice=true",
      image: cropAdvisorImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentLanguage={currentLanguage} />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Farm" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground space-y-6 animate-in fade-in-50 slide-in-from-left-10 duration-700">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {t.hero} 🌾
            </h1>
            <p className="text-xl md:text-2xl opacity-95">
              {t.subtitle}
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg shadow-[var(--shadow-glow)] hover:scale-105 transition-all"
            >
              <Link to="/advisor">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            {t.features}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 border-transparent hover:border-primary/20"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={feature.link}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Explore
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            © 2025 Namma Krushi — Smart, Sustainable, and Local 🌿
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
