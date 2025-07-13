
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [{
    text: t('testimonials.testimonial1'),
    name: "Joaquín Silvestre",
    username: "@joaquin_sil",
    image: "public/lovable-uploads/e2b74733-ec6e-4f8e-a0fc-23edd1436dd1.png"
  }, {
    text: t('testimonials.testimonial2'),
    name: "Miguel García",
    username: "@migar",
    image: "public/lovable-uploads/c4632db9-124a-4487-b749-00e73fe93b72.png"
  }, {
    text: t('testimonials.testimonial3'),
    name: "Lorena Fuertes",
    username: "@lorenfuertes",
    image: "public/lovable-uploads/4e119bfd-9c48-4c1b-b838-c689da4ed6e7.png"
  }, {
    text: t('testimonials.testimonial4'),
    name: "Elena Soriano",
    username: "@elenaso1",
    image: "public/lovable-uploads/bc8a7d7f-f1d1-4ac2-9e33-c829333bedc0.png"
  }, {
    text: t('testimonials.testimonial5'),
    name: "Patricia Pérez",
    username: "@perezm",
    image: "public/lovable-uploads/6e204e9f-f871-4c78-b1a9-515f30bacf1e.png"
  }];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          {t('testimonials.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary p-6 rounded-2xl neo-blur">
              <p className="text-gray-300 mb-4">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <Avatar className="w-12 h-12 rounded-full mr-3 overflow-hidden">
                  <AvatarFallback className="bg-gray-600">
                    <User className="w-6 h-6 text-white" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.username}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
