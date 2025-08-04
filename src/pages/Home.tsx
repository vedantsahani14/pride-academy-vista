import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import heroBg from '@/assets/hero-bg.jpg';

const Home = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: GraduationCap,
      title: t('home.features.academic.title'),
      description: t('home.features.academic.description'),
      link: "/about"
    },
    {
      icon: Users,
      title: t('home.features.faculty.title'),
      description: t('home.features.faculty.description'),
      link: "/teachers"
    },
    {
      icon: Award,
      title: t('home.features.extracurricular.title'),
      description: t('home.features.extracurricular.description'),
      link: "/students"
    },
    {
      icon: BookOpen,
      title: t('home.features.facilities.title'),
      description: t('home.features.facilities.description'),
      link: "/gallery"
    }
  ];

  const quickLinks = [
    { title: t('nav.principal'), description: "A word from our distinguished principal", link: "/principal" },
    { title: t('home.quickLinks.events'), description: "Stay updated with upcoming activities", link: "/events" },
    { title: t('home.quickLinks.admissions'), description: "Join our academic community", link: "/contact" },
    { title: t('nav.gallery'), description: "Explore our vibrant school life", link: "/gallery" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-navy-blue/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              National Pride
              <span className="block text-gradient">Academy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-medium">
              Senior Secondary School
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90 italic">
              "Enter to Learn, Leave to Serve"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button asChild size="lg" className="text-lg px-8 py-6 rounded-2xl shadow-elegant">
                <Link to="/about">{t('home.hero.cta1')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-2xl bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy-blue backdrop-blur-sm">
                <Link to="/contact">{t('home.hero.cta2')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are committed to providing world-class education that shapes future leaders 
              and global citizens through innovation, excellence, and character development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 shadow-card animate-scale-in">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </CardDescription>
                  <Button asChild variant="ghost" className="w-full">
                    <Link to={feature.link}>{t('common.learnMore')}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('home.quickLinks.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the various aspects of life at National Pride Academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {quickLinks.map((item, index) => (
              <Link key={index} to={item.link} className="group">
                <Card className="h-full hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border-0 shadow-card glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-2xl">
              <Link to="/contact">{t('home.cta.apply')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">{t('home.cta.learn')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;