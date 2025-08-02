import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import principalHero from '@/assets/principal-hero.jpg';

const Principal = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${principalHero})` }}
      >
        <div className="absolute inset-0 bg-navy-blue/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Principal's Message
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              A word from our distinguished leader
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Principal's Photo & Info */}
              <div className="lg:col-span-1 animate-scale-in">
                <Card className="shadow-elegant border-0 overflow-hidden">
                  <div className="aspect-[3/4] bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face" 
                      alt="Dr. Sarah Mitchell" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Dr. Sarah Mitchell</h3>
                    <p className="text-muted-foreground mb-4">Principal</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Ph.D. in Educational Leadership</p>
                      <p>M.Ed. in Curriculum & Instruction</p>
                      <p>25+ Years in Education</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-2 space-y-8 animate-slide-up">
                <Card className="shadow-card border-0 p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Quote className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p className="text-lg">
                        Dear Students, Parents, and Members of the National Pride Academy Community,
                      </p>
                      
                      <p>
                        It is with great pleasure and pride that I welcome you to National Pride Academy, 
                        where we have been committed to educational excellence for nearly four decades. 
                        Our school stands as a testament to the power of dedicated learning, innovative 
                        teaching, and the unwavering belief that every student has the potential to achieve 
                        greatness.
                      </p>

                      <p>
                        At National Pride Academy, we believe that education extends far beyond textbooks 
                        and examinations. We are dedicated to nurturing well-rounded individuals who possess 
                        not only academic knowledge but also strong moral values, critical thinking skills, 
                        and the confidence to face the challenges of tomorrow. Our motto, "Enter to Learn, 
                        Leave to Serve," encapsulates our commitment to developing students who will make 
                        meaningful contributions to society.
                      </p>

                      <p>
                        Our experienced faculty members are not just teachers; they are mentors, guides, 
                        and lifelong learners themselves. They bring passion, expertise, and innovation 
                        to every classroom, ensuring that our students receive a world-class education 
                        that prepares them for success in an increasingly interconnected world.
                      </p>

                      <p>
                        We are proud of our state-of-the-art facilities, our comprehensive curriculum 
                        that balances academics with co-curricular activities, and our strong emphasis 
                        on character development. Our students consistently achieve outstanding results, 
                        not just in academic pursuits but also in sports, arts, and community service.
                      </p>

                      <p>
                        As we continue to evolve and adapt to the changing educational landscape, we remain 
                        committed to our core values of excellence, integrity, innovation, and community. 
                        We invite you to be part of our journey as we continue to shape the leaders of tomorrow.
                      </p>

                      <p className="text-lg font-medium text-primary">
                        Together, let us build a brighter future through the power of education.
                      </p>

                      <div className="pt-4">
                        <p className="font-medium text-primary">Warm regards,</p>
                        <p className="text-2xl font-bold text-primary mt-2">Dr. Sarah Mitchell</p>
                        <p className="text-muted-foreground">Principal</p>
                        <p className="text-sm text-muted-foreground">National Pride Academy Senior Secondary School</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Vision Statement */}
                <Card className="shadow-card border-0 p-8 bg-secondary/30">
                  <h3 className="text-2xl font-bold text-primary mb-4">My Vision for Our School</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I envision National Pride Academy as a place where every student discovers their 
                      unique talents and develops the skills necessary to excel in their chosen paths. 
                      We strive to create an environment that fosters creativity, critical thinking, 
                      and compassionate leadership.
                    </p>
                    <p>
                      Our goal is to prepare students not just for academic success, but for life success. 
                      We want our graduates to be confident, ethical, and capable individuals who contribute 
                      positively to their communities and the world at large.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the difference that dedicated educators and a supportive community can make 
            in your child's educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-medium hover:bg-accent/90 transition-colors"
            >
              Schedule a Visit
            </a>
            <a 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground rounded-2xl font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Principal;