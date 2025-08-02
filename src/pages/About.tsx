import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Heart, Star, Users, Award } from 'lucide-react';
import aboutHero from '@/assets/about-hero.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in all our endeavors"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We uphold honesty, transparency, and ethical conduct"
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a supportive and inclusive learning environment"
    },
    {
      icon: Star,
      title: "Innovation",
      description: "We embrace new ideas and creative approaches to learning"
    }
  ];

  const achievements = [
    "98% University Placement Rate",
    "National Academic Excellence Award 2023",
    "Best STEM Education Program",
    "Outstanding Sports Achievement",
    "Environmental Conservation Champion",
    "Digital Innovation in Education"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-navy-blue/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About Our School
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Discover the rich history, values, and vision that drive National Pride Academy 
              in its mission to nurture tomorrow's leaders and global citizens.
            </p>
          </div>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* History */}
              <div className="animate-slide-up">
                <h2 className="text-4xl font-bold text-primary mb-6">Our History</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 1985, National Pride Academy has been a beacon of educational 
                    excellence for nearly four decades. What began as a small institution with 
                    50 students has grown into one of the region's most prestigious schools.
                  </p>
                  <p>
                    Our journey started with a simple yet powerful vision: to create an 
                    educational environment where every child could discover their potential 
                    and develop the skills needed to make a positive impact on the world.
                  </p>
                  <p>
                    Over the years, we have consistently evolved our teaching methodologies, 
                    embraced technological advancements, and maintained our commitment to 
                    holistic education that balances academic rigor with character development.
                  </p>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="space-y-8 animate-scale-in">
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      To provide a nurturing environment that challenges students academically, 
                      develops their character, and prepares them to be responsible global citizens 
                      who can contribute meaningfully to society.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <div className="w-12 h-12 bg-school-red rounded-2xl flex items-center justify-center mb-4">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      To be recognized as a leading educational institution that empowers students 
                      to achieve their highest potential while fostering innovation, critical thinking, 
                      and a lifelong love for learning.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the character 
              of our school community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 shadow-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Recognition of our commitment to educational excellence and student success
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-base p-4 h-auto bg-accent/10 text-accent-foreground border border-accent/20 hover:bg-accent/20 transition-colors"
                >
                  <Award className="h-5 w-5 mr-2" />
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">1200+</div>
              <div className="text-lg opacity-90">Students</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">85+</div>
              <div className="text-lg opacity-90">Faculty Members</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">39</div>
              <div className="text-lg opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;