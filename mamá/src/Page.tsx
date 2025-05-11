import { useRef, useState } from "react";
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type ListMultimedia } from "./types.d";
import mama1 from "./assets/mama1.jpg";
import mama2 from "./assets/mama2.jpeg";
import mama3 from "./assets/mama3.jpg";
import mama4 from "./assets/mama4.jpg";
import mama5 from "./assets/mama5.jpg";
import mama6 from "./assets/mama6.jpg";
import mama7 from "./assets/mama7.jpg";
import mama8 from "./assets/mama8.jpg";
import mama9 from "./assets/mama9.jpeg";
import { MorphingText } from "@/components/magicui/morphing-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Ventana } from "./Ventana";

const multimedia: ListMultimedia = [
  {
    url: mama1,
  },
  {
    url: mama2,
  },
  {
    url: mama3,
  },
  {
    url: mama4,
  },
  {
    url: mama5,
  },
  {
    url: mama6,
  },
  {
    url: mama7,
  },
  {
    url: mama8,
  },
  {
    url: mama9,
  },
];
const totalItems = multimedia.length - 1;

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto overflow-hidden shadow-lg p-0">
        <CardContent className="p-0">
          <div className="relative bg-gradient-to-b from-pink-100 to-pink-200 p-6 text-center">
            <h1 className="text-3xl md:text-4xl font-script text-gray-800 mb-2">
              <MorphingText texts={["Feliz", "Día", "A la", "Mejor", "Mamá"]} />
              <Heart className="inline-block fill-rose-500 text-rose-500 animate-pulse" />
            </h1>

            <div className="mt-6 mb-8 relative">
              <div className="relative w-full aspect-square max-w-xs mx-auto">
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full max-w-xs h-fit"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent className="w-full aspect-square max-w-xs mx-auto">
                    {multimedia.map((contenido, index) => (
                      <CarouselItem
                        key={index}
                        className="inset-0 flex justify-center"
                      >
                        {index === totalItems ? (
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/VfJsjbZFI7M?autoplay=1&mute=1&loop=1&playlist=VfJsjbZFI7M"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          ></iframe>
                        ) : (
                          <img
                            src={contenido.url}
                            alt="Foto con mamá"
                            className="shadow-lg p-0 object-cover rounded-lg transition-opacity duration-300"
                          />
                        )}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>

            <div
              className="mt-6 flex justify-center cartita"
              onClick={() => {
                setIsOpen(true);
                setIsPlaying(true);
              }}
            >
              <div className="relative w-24 h-16">
                <div className="absolute inset-0 bg-pink-300 rounded-lg transform rotate-3 shadow-md"></div>
                <div className="absolute inset-0 bg-pink-200 rounded-lg transform -rotate-3 shadow-md flex items-center justify-center">
                  <Heart className="h-6 w-6 fill-rose-500 text-rose-500" />
                </div>
              </div>
            </div>
            <footer className="mt-6">
              <SparklesText className="text-2xl">
                Yarledy Salgado Hernandez
              </SparklesText>
              ;
            </footer>
          </div>
        </CardContent>
      </Card>
      <Ventana
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default Page;
