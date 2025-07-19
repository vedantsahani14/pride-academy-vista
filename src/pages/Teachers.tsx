import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, GraduationCap, BookOpen, Award } from 'lucide-react';

const Teachers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Dummy teachers data
  const teachers = [
    {
      id: 1,
      name: "Dr. Patricia Williams",
      subject: "Mathematics",
      department: "science",
      email: "p.williams@nationalpride.edu",
      phone: "+1 (555) 234-5678",
      experience: "15 Years",
      education: "Ph.D. in Mathematics",
      specialization: "Advanced Calculus, Statistics",
      achievements: ["Best Teacher Award 2023", "Mathematics Excellence Recognition"],
      image: "https://images.unsplash.com/photo-1559209172-8b9dcfcf2dea?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mr. Robert Thompson",
      subject: "Physics",
      department: "science",
      email: "r.thompson@nationalpride.edu",
      phone: "+1 (555) 234-5679",
      experience: "12 Years",
      education: "M.S. in Physics",
      specialization: "Quantum Physics, Laboratory Research",
      achievements: ["Science Fair Coordinator", "Research Publication Award"],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Ms. Jennifer Davis",
      subject: "English Literature",
      department: "languages",
      email: "j.davis@nationalpride.edu",
      phone: "+1 (555) 234-5680",
      experience: "18 Years",
      education: "M.A. in English Literature",
      specialization: "Creative Writing, Poetry Analysis",
      achievements: ["Literary Club Advisor", "Writing Workshop Leader"],
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Dr. Maria Gonzalez",
      subject: "Chemistry",
      department: "science",
      email: "m.gonzalez@nationalpride.edu",
      phone: "+1 (555) 234-5681",
      experience: "20 Years",
      education: "Ph.D. in Organic Chemistry",
      specialization: "Organic Chemistry, Laboratory Safety",
      achievements: ["Science Department Head", "Safety Excellence Award"],
      image: "https://images.unsplash.com/photo-1594824720626-c837eb0b2ef5?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Mr. Ahmed Hassan",
      subject: "Computer Science",
      department: "technology",
      email: "a.hassan@nationalpride.edu",
      phone: "+1 (555) 234-5682",
      experience: "10 Years",
      education: "M.S. in Computer Science",
      specialization: "Programming, Web Development",
      achievements: ["Coding Club Advisor", "Tech Innovation Award"],
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Ms. Sarah Johnson",
      subject: "History",
      department: "social",
      email: "s.johnson@nationalpride.edu",
      phone: "+1 (555) 234-5683",
      experience: "14 Years",
      education: "M.A. in World History",
      specialization: "Ancient Civilizations, Modern History",
      achievements: ["History Fair Coordinator", "Cultural Heritage Award"],
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Mr. Carlos Rodriguez",
      subject: "Spanish",
      department: "languages",
      email: "c.rodriguez@nationalpride.edu",
      phone: "+1 (555) 234-5684",
      experience: "11 Years",
      education: "B.A. in Spanish Literature",
      specialization: "Conversational Spanish, Latin American Culture",
      achievements: ["Language Exchange Program", "Cultural Ambassador"],
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Ms. Rachel Kim",
      subject: "Art & Design",
      department: "arts",
      email: "r.kim@nationalpride.edu",
      phone: "+1 (555) 234-5685",
      experience: "9 Years",
      education: "MFA in Fine Arts",
      specialization: "Digital Art, Traditional Painting",
      achievements: ["Art Exhibition Organizer", "Creative Excellence Award"],
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "Mr. Thomas Brown",
      subject: "Physical Education",
      department: "sports",
      email: "t.brown@nationalpride.edu",
      phone: "+1 (555) 234-5686",
      experience: "16 Years",
      education: "B.S. in Kinesiology",
      specialization: "Athletic Training, Sports Psychology",
      achievements: ["Basketball Coach", "Athletic Excellence Award"],
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const departments = [
    { id: 'all', name: 'All Teachers', count: teachers.length },
    { id: 'science', name: 'Science & Math', count: teachers.filter(t => t.department === 'science').length },
    { id: 'languages', name: 'Languages & Literature', count: teachers.filter(t => t.department === 'languages').length },
    { id: 'technology', name: 'Technology', count: teachers.filter(t => t.department === 'technology').length },
    { id: 'social', name: 'Social Studies', count: teachers.filter(t => t.department === 'social').length },
    { id: 'arts', name: 'Arts & Creative', count: teachers.filter(t => t.department === 'arts').length },
    { id: 'sports', name: 'Physical Education', count: teachers.filter(t => t.department === 'sports').length }
  ];

  const filteredTeachers = selectedDepartment === 'all' 
    ? teachers 
    : teachers.filter(teacher => teacher.department === selectedDepartment);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-navy-blue to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Faculty
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Dedicated educators passionate about inspiring and nurturing young minds
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">85+</div>
              <div className="text-muted-foreground">Expert Teachers</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Average Experience</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Advanced Degrees</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Departments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Department Filter */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Meet Our Teachers
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {departments.map((dept) => (
                <Button
                  key={dept.id}
                  variant={selectedDepartment === dept.id ? "default" : "outline"}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className="rounded-full"
                >
                  {dept.name}
                  <Badge variant="secondary" className="ml-2">
                    {dept.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeachers.map((teacher, index) => (
              <Card 
                key={teacher.id} 
                className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 shadow-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-2xl">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{teacher.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold text-lg">{teacher.subject}</CardDescription>
                  <Badge variant="outline" className="w-fit mx-auto mt-2 capitalize">
                    {teacher.department}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      {teacher.education}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Award className="h-4 w-4 mr-2" />
                      {teacher.experience} Experience
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {teacher.specialization}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2" />
                      {teacher.email}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2" />
                      {teacher.phone}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Achievements</h4>
                    <div className="space-y-1">
                      {teacher.achievements.map((achievement, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs mr-1 mb-1">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Teaching Excellence
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Are you passionate about education and ready to make a difference? 
            We're always looking for dedicated educators to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-medium hover:bg-accent/90 transition-colors"
            >
              View Open Positions
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground rounded-2xl font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Submit Application
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;