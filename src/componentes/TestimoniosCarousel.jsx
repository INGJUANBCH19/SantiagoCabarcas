import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "María González",
    position: "Directora de Empresa",
    image: "/clientes/cliente1.jpg",
    testimonio: "El servicio legal recibido fue excepcional. Resolvieron mi caso de manera rápida y profesional.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    position: "Empresario",
    image: "/clientes/cliente2.jpg",
    testimonio: "Asesoramiento preciso y trato cercano. Recomiendo sus servicios sin duda alguna.",
    rating: 4.5
  },
  {
    id: 3,
    name: "Ana Martínez",
    position: "Gerente Financiera",
    image: "/clientes/cliente3.jpg",
    testimonio: "Solucionaron un complejo problema contractual con excelentes resultados para nuestra empresa.",
    rating: 5
  },
  {
    id: 4,
    name: "Jorge Pérez",
    position: "Emprendedor",
    image: "/clientes/cliente4.jpg",
    testimonio: "Encontré exactamente el apoyo legal que necesitaba para mi startup. Muy satisfecho.",
    rating: 4
  },
  {
    id: 5,
    name: "Lucía Fernández",
    position: "Directora de RRHH",
    image: "/clientes/cliente5.jpg",
    testimonio: "Manejo impecable de nuestro caso laboral. Profesionales altamente capacitados.",
    rating: 5
  }
];

const RatingStars = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }

  return <div className="flex justify-center space-x-1 mt-2">{stars}</div>;
};

const TestimonialsCarousel = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Clientes Satisfechos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lo que dicen nuestros clientes sobre nuestros servicios legales
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            640: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-24 h-24 rounded-full object-cover border-4 border-[#DBC078]"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-[#DBC078] rounded-full p-2">
                      <FaQuoteLeft className="text-white text-sm" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <p className="text-gray-600 italic mb-6 text-center">
                    "{testimonial.testimonio}"
                  </p>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-xl font-bold text-center text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-center text-sm mb-2">
                    {testimonial.position}
                  </p>
                  <RatingStars rating={testimonial.rating} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;