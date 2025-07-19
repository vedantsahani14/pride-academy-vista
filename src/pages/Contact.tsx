import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Education Street", "Academic District", "City, State 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568 (Admissions)"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@nationalpride.edu", "admissions@nationalpride.edu"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 2:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-navy-blue to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Get in touch with our admissions team or schedule a campus visit
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-up">
                <Card className="shadow-elegant border-0">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary flex items-center">
                      <Send className="h-8 w-8 mr-3" />
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="rounded-xl"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="rounded-xl"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="rounded-xl"
                          placeholder="Tell us about your inquiry, admission questions, or how we can help you..."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full rounded-xl text-lg py-6">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 animate-scale-in">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    We'd love to hear from you! Whether you're a prospective student, parent, 
                    or community member, our team is here to answer your questions and provide 
                    information about National Pride Academy.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="shadow-card border-0">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-6 w-6 text-accent-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-muted-foreground">{detail}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Actions */}
                <Card className="shadow-card border-0 bg-secondary/30">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start rounded-xl">
                        <MapPin className="h-4 w-4 mr-2" />
                        Schedule Campus Tour
                      </Button>
                      <Button variant="outline" className="w-full justify-start rounded-xl">
                        <Mail className="h-4 w-4 mr-2" />
                        Download Admission Brochure
                      </Button>
                      <Button variant="outline" className="w-full justify-start rounded-xl">
                        <Phone className="h-4 w-4 mr-2" />
                        Request Callback
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">Visit Our Campus</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Located in the heart of the academic district, our beautiful campus is easily accessible
            </p>
            
            {/* Placeholder for map */}
            <div className="bg-muted rounded-3xl h-96 flex items-center justify-center shadow-card">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive Campus Map</p>
                <p className="text-sm text-muted-foreground">123 Education Street, Academic District</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;