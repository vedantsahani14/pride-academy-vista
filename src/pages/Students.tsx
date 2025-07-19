import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Star, Medal, Award, Users, GraduationCap } from 'lucide-react';

const Students = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Dummy student achievements data
  const achievements = [
    {
      id: 1,
      title: "National Science Olympiad Winner",
      student: "Emily Chen",
      class: "Grade 12-A",
      category: "academic",
      description: "First place in National Science Olympiad 2024, Chemistry category",
      date: "March 2024",
      icon: Trophy,
      color: "text-golden-yellow"
    },
    {
      id: 2,
      title: "State Basketball Championship",
      student: "Marcus Johnson",
      class: "Grade 11-B",
      category: "sports",
      description: "Led school basketball team to state championship victory",
      date: "February 2024",
      icon: Medal,
      color: "text-school-red"
    },
    {
      id: 3,
      title: "International Art Competition",
      student: "Sophia Rodriguez",
      class: "Grade 10-C",
      category: "arts",
      description: "Second place in International Youth Art Competition",
      date: "January 2024",
      icon: Star,
      color: "text-accent"
    },
    {
      id: 4,
      title: "Debate Team Regional Champions",
      student: "National Pride Debate Team",
      class: "Grades 10-12",
      category: "academic",
      description: "Regional champions in inter-school debate competition",
      date: "April 2024",
      icon: Award,
      color: "text-primary"
    },
    {
      id: 5,
      title: "Community Service Excellence",
      student: "Green Club Members",
      class: "All Grades",
      category: "community",
      description: "Outstanding contribution to environmental conservation projects",
      date: "Ongoing",
      icon: Users,
      color: "text-green-600"
    },
    {
      id: 6,
      title: "Mathematics Olympiad Gold",
      student: "David Kim",
      class: "Grade 12-B",
      category: "academic",
      description: "Gold medal in Regional Mathematics Olympiad",
      date: "March 2024",
      icon: Trophy,
      color: "text-golden-yellow"
    }
  ];

  // Dummy class statistics
  const classStats = [
    {
      grade: "Grade 9",
      students: 150,
      sections: 4,
      avgScore: 92,
      topAchievers: 25
    },
    {
      grade: "Grade 10",
      students: 145,
      sections: 4,
      avgScore: 90,
      topAchievers: 28
    },
    {
      grade: "Grade 11",
      students: 140,
      sections: 4,
      avgScore: 89,
      topAchievers: 22
    },
    {
      grade: "Grade 12",
      students: 135,
      sections: 4,
      avgScore: 94,
      topAchievers: 35
    }
  ];

  const categories = [
    { id: 'all', name: 'All Achievements', count: achievements.length },
    { id: 'academic', name: 'Academic', count: achievements.filter(a => a.category === 'academic').length },
    { id: 'sports', name: 'Sports', count: achievements.filter(a => a.category === 'sports').length },
    { id: 'arts', name: 'Arts & Culture', count: achievements.filter(a => a.category === 'arts').length },
    { id: 'community', name: 'Community Service', count: achievements.filter(a => a.category === 'community').length }
  ];

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-navy-blue to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Students
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Celebrating excellence, achievements, and the bright future of our student body
            </p>
          </div>
        </div>
      </section>

      {/* Student Statistics */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">Student Overview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A snapshot of our diverse and accomplished student community
            </p>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-16">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-muted-foreground">Total Students</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">16</div>
              <div className="text-muted-foreground">Class Sections</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">91%</div>
              <div className="text-muted-foreground">Average Score</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">110</div>
              <div className="text-muted-foreground">Top Achievers</div>
            </div>
          </div>

          {/* Class-wise Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classStats.map((classData, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-elegant transition-all duration-300 border-0 shadow-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">{classData.grade}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="font-semibold text-primary">{classData.students}</div>
                      <div className="text-muted-foreground">Students</div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{classData.sections}</div>
                      <div className="text-muted-foreground">Sections</div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{classData.avgScore}%</div>
                      <div className="text-muted-foreground">Avg Score</div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{classData.topAchievers}</div>
                      <div className="text-muted-foreground">Achievers</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Student Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Celebrating our students' outstanding accomplishments across academics, 
              sports, arts, and community service.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAchievements.map((achievement, index) => (
              <Card 
                key={achievement.id} 
                className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 shadow-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center ${achievement.color}`}>
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {achievement.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {achievement.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">{achievement.student}</span>
                      <Badge variant="secondary">{achievement.date}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{achievement.class}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Highlights */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">Student Life Highlights</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Beyond academics, our students engage in diverse activities that shape their character and skills
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-card border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">25+ Clubs</h3>
                  <p className="text-muted-foreground">Student-led clubs covering diverse interests from robotics to drama</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-school-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">50+ Awards</h3>
                  <p className="text-muted-foreground">Recognition in regional and national competitions this year</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-golden-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">98% Success</h3>
                  <p className="text-muted-foreground">University placement rate for our graduating students</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Be Part of Our Success Story
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join National Pride Academy and unlock your potential in an environment 
            that celebrates achievement and fosters growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-medium hover:bg-accent/90 transition-colors"
            >
              Apply for Admission
            </a>
            <a 
              href="/gallery" 
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground rounded-2xl font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              View Student Life
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;