import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ZoomIn } from 'lucide-react';
import galleryHero from '@/assets/gallery-hero.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Dummy gallery data
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
      title: "Science Laboratory",
      category: "facilities",
      description: "Students conducting experiments in our state-of-the-art chemistry lab"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
      title: "Annual Sports Day",
      category: "events",
      description: "Students participating in track and field events"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      title: "Graduation Ceremony 2024",
      category: "events",
      description: "Our proud graduates receiving their diplomas"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
      title: "Modern Library",
      category: "facilities",
      description: "Our extensive library with digital learning resources"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      title: "Computer Science Class",
      category: "academics",
      description: "Students learning programming and software development"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      title: "Art Exhibition",
      category: "events",
      description: "Students showcasing their creative artwork"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
      title: "Campus Gardens",
      category: "campus",
      description: "Beautiful landscaped gardens throughout our campus"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      title: "Mathematics Competition",
      category: "academics",
      description: "Students participating in inter-school math olympiad"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
      title: "Music Concert",
      category: "events",
      description: "Annual music concert featuring our talented students"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      title: "Basketball Court",
      category: "facilities",
      description: "Students enjoying basketball during physical education"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
      title: "Main Campus Building",
      category: "campus",
      description: "Our iconic main building housing administrative offices"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
      title: "Cultural Festival",
      category: "events",
      description: "Students celebrating diversity during our annual cultural fest"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'events', name: 'Events', count: galleryImages.filter(img => img.category === 'events').length },
    { id: 'facilities', name: 'Facilities', count: galleryImages.filter(img => img.category === 'facilities').length },
    { id: 'academics', name: 'Academics', count: galleryImages.filter(img => img.category === 'academics').length },
    { id: 'campus', name: 'Campus Life', count: galleryImages.filter(img => img.category === 'campus').length }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${galleryHero})` }}
      >
        <div className="absolute inset-0 bg-navy-blue/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              School Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Explore the vibrant life and beautiful campus of National Pride Academy
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
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

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="group overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 shadow-card cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-blue/0 group-hover:bg-navy-blue/60 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="capitalize">
                      {image.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary mb-2">{image.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 z-10 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-full object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;