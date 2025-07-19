import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Award, Users } from 'lucide-react';

const Management = () => {
  // Dummy management team data
  const managementTeam = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      position: "Principal",
      department: "Administration",
      email: "s.mitchell@nationalpride.edu",
      phone: "+1 (555) 123-4567",
      experience: "25 Years",
      education: "Ph.D. in Educational Leadership",
      achievements: ["National Excellence Award 2023", "Educational Leadership Certification"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mr. James Anderson",
      position: "Vice Principal",
      department: "Academic Affairs",
      email: "j.anderson@nationalpride.edu",
      phone: "+1 (555) 123-4568",
      experience: "20 Years",
      education: "M.Ed. in Curriculum Development",
      achievements: ["Academic Excellence Award", "Curriculum Innovation Recognition"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Ms. Emily Rodriguez",
      position: "Academic Director",
      department: "Curriculum & Instruction",
      email: "e.rodriguez@nationalpride.edu",
      phone: "+1 (555) 123-4569",
      experience: "18 Years",
      education: "M.A. in Educational Psychology",
      achievements: ["Teaching Excellence Award", "Research Publication Recognition"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      position: "Student Affairs Director",
      department: "Student Services",
      email: "m.chen@nationalpride.edu",
      phone: "+1 (555) 123-4570",
      experience: "15 Years",
      education: "Ph.D. in Student Development",
      achievements: ["Student Advocacy Award", "Community Service Recognition"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Ms. Lisa Thompson",
      position: "Finance Director",
      department: "Finance & Operations",
      email: "l.thompson@nationalpride.edu",
      phone: "+1 (555) 123-4571",
      experience: "22 Years",
      education: "MBA in Financial Management",
      achievements: ["Financial Excellence Award", "Cost Efficiency Recognition"],
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Mr. David Kumar",
      position: "Technology Director",
      department: "Information Technology",
      email: "d.kumar@nationalpride.edu",
      phone: "+1 (555) 123-4572",
      experience: "12 Years",
      education: "M.S. in Information Systems",
      achievements: ["Digital Innovation Award", "Technology Integration Excellence"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const departments = [
    { name: "Administration", count: 2, color: "bg-primary" },
    { name: "Academic Affairs", count: 1, color: "bg-accent" },
    { name: "Student Services", count: 1, color: "bg-school-red" },
    { name: "Finance & Operations", count: 1, color: "bg-golden-yellow" },
    { name: "Information Technology", count: 1, color: "bg-secondary" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-navy-blue to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              School Management
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Meet the dedicated leadership team driving excellence at National Pride Academy
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">Leadership Departments</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our management team is organized across key departments to ensure comprehensive school operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 border-0 shadow-card">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${dept.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground">{dept.count} Leader{dept.count > 1 ? 's' : ''}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals committed to providing the highest quality education 
              and fostering an environment where every student can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <Card 
                key={member.id} 
                className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 shadow-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold">{member.position}</CardDescription>
                  <Badge variant="outline" className="w-fit mx-auto mt-2">
                    {member.department}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Award className="h-4 w-4 mr-2" />
                      {member.experience} Experience
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2" />
                      {member.email}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2" />
                      {member.phone}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Education</h4>
                    <p className="text-sm text-muted-foreground">{member.education}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Key Achievements</h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
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

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Connect with Our Leadership
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our management team is always available to address concerns, suggestions, 
            and collaborate on initiatives that benefit our school community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-medium hover:bg-accent/90 transition-colors"
            >
              Schedule a Meeting
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground rounded-2xl font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Administration
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;