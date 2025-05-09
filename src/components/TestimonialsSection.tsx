import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
const TestimonialsSection = () => {
  const testimonials = [{
    text: "En otras apps no encontraba a nadie interesante o amable. La comunidad de toppin es genial.",
    name: "Joaquín Silvestre",
    username: "@joaquin_sil",
    image: "public/lovable-uploads/e2b74733-ec6e-4f8e-a0fc-23edd1436dd1.png"
  }, {
    text: "Empecé a usar toppin la semana pasada y ya he tenido dos citas.",
    name: "Miguel García",
    username: "@migar",
    image: "public/lovable-uploads/c4632db9-124a-4487-b749-00e73fe93b72.png"
  }, {
    text: "Es una app genial, consigues conocer a gente jugando. Muy divertido.",
    name: "Lorena Fuertes",
    username: "@lorenfuertes",
    image: "public/lovable-uploads/4e119bfd-9c48-4c1b-b838-c689da4ed6e7.png"
  }, {
    text: "Usando Toppin conocí a mi pareja. Él me envió un muffin y no me pude resistir.",
    name: "Elena Soriano",
    username: "@elenaso1",
    image: "public/lovable-uploads/bc8a7d7f-f1d1-4ac2-9e33-c829333bedc0.png"
  }, {
    text: "Antes tardaba mucho tiempo en encontrar a alguien con quien tener una charla interesante. Ahora, es muy fácil encontrar gente que vale la pena.",
    name: "Patricia Pérez",
    username: "@perezm",
    image: "public/lovable-uploads/6e204e9f-f871-4c78-b1a9-515f30bacf1e.png"
  }];
  return <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Probaron <span className="text-toppin-blue">Toppin</span> <br />
          e hicieron <span className="text-toppin-pink">MATCH</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-secondary p-6 rounded-2xl neo-blur">
              <p className="text-gray-300 mb-4">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <Avatar className="w-12 h-12 rounded-full mr-3 overflow-hidden">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} className="poner un icono de una cara hecha con IA" />
                  <AvatarFallback className="bg-gray-600">{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.username}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;