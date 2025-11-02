import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import { Award, Target, Users, Zap } from "lucide-react";

const About = () => {
  const currentLanguage = localStorage.getItem("appLanguage") || "en";

  const content = {
    en: {
      title: "About Namma Krushi",
      subtitle: "Empowering farmers with AI-driven insights",
      mission: "Our Mission",
      missionText: "To revolutionize agriculture by making AI-powered insights accessible to every farmer, regardless of language or location.",
      vision: "Our Vision",
      visionText: "A sustainable future where technology and traditional farming practices work together to feed the world.",
      team: "Our Team",
      teamText: "Built by passionate students from VVCE Mysuru for Hack Kshetra 2.0",
      features: "Key Features",
    },
    kn: {
      title: "ನಮ್ಮ ಕೃಷಿ ಬಗ್ಗೆ",
      subtitle: "AI-ಚಾಲಿತ ಒಳನೋಟಗಳೊಂದಿಗೆ ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು",
      mission: "ನಮ್ಮ ಧ್ಯೇಯ",
      missionText: "ಭಾಷೆ ಅಥವಾ ಸ್ಥಳವನ್ನು ಲೆಕ್ಕಿಸದೆ ಪ್ರತಿ ರೈತರಿಗೆ AI-ಚಾಲಿತ ಒಳನೋಟಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ಕೃಷಿಯನ್ನು ಕ್ರಾಂತಿಗೊಳಿಸುವುದು.",
      vision: "ನಮ್ಮ ದೃಷ್ಟಿ",
      visionText: "ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಕೃಷಿ ಅಭ್ಯಾಸಗಳು ವಿಶ್ವವನ್ನು ಪೋಷಿಸಲು ಒಟ್ಟಾಗಿ ಕೆಲಸ ಮಾಡುವ ಸುಸ್ಥಿರ ಭವಿಷ್ಯ.",
      team: "ನಮ್ಮ ತಂಡ",
      teamText: "Hack Kshetra 2.0 ಗಾಗಿ VVCE ಮೈಸೂರಿನ ಉತ್ಸಾಹಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ",
      features: "ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು",
    },
    hi: {
      title: "नम्मा कृषि के बारे में",
      subtitle: "AI-संचालित अंतर्दृष्टि के साथ किसानों को सशक्त बनाना",
      mission: "हमारा मिशन",
      missionText: "भाषा या स्थान की परवाह किए बिना प्रत्येक किसान के लिए AI-संचालित अंतर्दृष्टि को सुलभ बनाकर कृषि में क्रांति लाना।",
      vision: "हमारी दृष्टि",
      visionText: "एक स्थायी भविष्य जहां प्रौद्योगिकी और पारंपरिक खेती की प्रथाएं दुनिया को खिलाने के लिए मिलकर काम करती हैं।",
      team: "हमारी टीम",
      teamText: "Hack Kshetra 2.0 के लिए VVCE मैसूर के जुनूनी छात्रों द्वारा निर्मित",
      features: "मुख्य विशेषताएं",
    },
    te: {
      title: "నమ్మ కృషి గురించి",
      subtitle: "AI-శక్తితో రైతులను శక్తివంతం చేయడం",
      mission: "మా లక్ష్యం",
      missionText: "భాష లేదా స్థానంతో సంబంధం లేకుండా ప్రతి రైతుకు AI-శక్తితో అంతర్దృష్టులను అందుబాటులో ఉంచడం ద్వారా వ్యవసాయంలో విప్లవం సృష్టించడం.",
      vision: "మా దృష్టి",
      visionText: "సాంకేతికత మరియు సాంప్రదాయ వ్యవసాయ పద్ధతులు ప్రపంచాన్ని పోషించడానికి కలిసి పనిచేసే స్థిరమైన భవిష్యత్తు.",
      team: "మా బృందం",
      teamText: "Hack Kshetra 2.0 కోసం VVCE మైసూర్ నుండి ఉత్సాహభరితమైన విద్యార్థులచే నిర్మించబడింది",
      features: "ముఖ్య లక్షణాలు",
    },
    ta: {
      title: "நம்மா கிருஷி பற்றி",
      subtitle: "AI-இயக்கப்பட்ட நுண்ணறிவுகளுடன் விவசாயிகளை வலுப்படுத்துதல்",
      mission: "எங்கள் இலக்கு",
      missionText: "மொழி அல்லது இடத்தைப் பொருட்படுத்தாமல் ஒவ்வொரு விவசாயிக்கும் AI-இயக்கப்பட்ட நுண்ணறிவுகளை அணுகக்கூடியதாக மாற்றுவதன் மூலம் விவசாயத்தில் புரட்சி செய்வது.",
      vision: "எங்கள் பார்வை",
      visionText: "தொழில்நுட்பம் மற்றும் பாரம்பரிய விவசாய நடைமுறைகள் உலகை உணவளிக்க ஒன்றாக வேலை செய்யும் நிலையான எதிர்காலம்.",
      team: "எங்கள் குழு",
      teamText: "Hack Kshetra 2.0 க்காக VVCE மைசூரிலிருந்து ஆர்வமுள்ள மாணவர்களால் கட்டப்பட்டது",
      features: "முக்கிய அம்சங்கள்",
    },
  };

  const t = content[currentLanguage as keyof typeof content];

  const keyFeatures = [
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms analyze your crop data to provide actionable recommendations",
      color: "text-yellow-500 bg-yellow-500/10",
    },
    {
      icon: Users,
      title: "Multi-Language Support",
      description: "Access information in Kannada, English, Hindi, Telugu, and Tamil",
      color: "text-blue-500 bg-blue-500/10",
    },
    {
      icon: Target,
      title: "Real-Time Market Data",
      description: "Stay updated with current prices and connect directly with local farmers",
      color: "text-green-500 bg-green-500/10",
    },
    {
      icon: Award,
      title: "Sustainable Practices",
      description: "Learn eco-friendly farming methods that protect the environment",
      color: "text-purple-500 bg-purple-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation currentLanguage={currentLanguage} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-in fade-in-50 slide-in-from-top-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{t.title}</h1>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-[var(--shadow-soft)] border-2 border-primary/20 animate-in fade-in-50 slide-in-from-left-4 duration-700">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  {t.mission}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{t.missionText}</p>
              </CardContent>
            </Card>

            <Card className="shadow-[var(--shadow-soft)] border-2 border-accent/20 animate-in fade-in-50 slide-in-from-right-4 duration-700">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Award className="h-6 w-6 text-accent" />
                  {t.vision}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{t.visionText}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-[var(--shadow-soft)] bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/10 animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                {t.team}
              </CardTitle>
              <CardDescription className="text-base">{t.teamText}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We are a team of engineering students from Vidyavardhaka College of Engineering, Mysuru, participating in Hack Kshetra 2.0. 
                Our goal is to leverage cutting-edge AI technology to solve real-world agricultural challenges and empower farmers across India.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-foreground">{t.features}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 animate-in fade-in-50 slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <CardHeader>
                    <div className={`p-3 rounded-lg w-fit ${feature.color} group-hover:scale-110 transition-transform mb-3`}>
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
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

export default About;
