import { Music, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AudioPlayer } from "./AudioPlayer";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

export const Ventana: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  isPlaying,
  setIsPlaying,
}) => {
  return (
    <div>
      {/* <h1 className="text-4xl md:text-5xl font-cursive text-gray-800 mb-8 flex items-center">
        ¡Feliz Día Mamá!{" "}
        <Heart className="ml-2 h-8 w-8 fill-pink-500 text-pink-500" />
      </h1>

      <Button
        onClick={() => setIsOpen(true)}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Abrir Tarjeta
      </Button> */}

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ transition: "opacity 0.5s ease" }}
        onClick={() => {
          setIsOpen(false);
          setIsPlaying(false);
        }}
      >
        {/* Card */}
        <Card
          className={cn(
            "relative max-w-2xl w-full bg-white rounded-lg shadow-2xl overflow-hidden z-50 transform",
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-8"
          )}
          style={{ transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => {
              setIsOpen(false);
              setIsPlaying(false);
            }}
            className="absolute top-2 right-2 z-10 p-1 rounded-full bg-white/80 hover:bg-white text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Music player */}
          <div className="bg-gradient-to-r from-pink-400 to-pink-600 p-4 text-white">
            <div className="flex items-center">
              <Music className="h-6 w-6 mr-2" />
              <div className="flex-1">
                <div className="text-sm font-medium">Canción para Mamá</div>
                <div className="text-xs opacity-80">Israel Kamakawiwo'ole</div>
              </div>
              <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            </div>
          </div>

          {/* Card content */}
          <div className="p-6">
            <div className="border-2 border-dotted border-gray-300 rounded-lg p-4 mb-4">
              <h2 className="text-xl font-medium text-gray-800 mb-2 font-sans">
                Querida Mamá
              </h2>
              <p className="text-gray-700 mb-4 font-sans">
                Hoy es tu día mamá, que nos enseñó con{" "}
                <span className="text-pink-500 font-medium">amor</span>, la{" "}
                <span className="text-pink-500 font-medium">paciencia</span> y
                <span className="text-pink-500 font-medium"> sacrificio</span>{" "}
                (como en las películas). Gracias, mamá, por ser refugio en los
                días difíciles, por cada sonrisa que nos regalaste aún en medio
                del cansancio y por tu fuerza que siempre nos inspira. No soy de
                decirte estas palabras seguido, pero hoy salen con mucho cariño,
                para celebrar este día tan especial. Nada en este mundo se
                compara con tu entrega y tu corazón. Hoy y siempre, te honramos
                y te agradecemos por todo lo que eres.
              </p>
              <p className="text-gray-700 mb-2 font-sans">
                Gracias por hacer de mi vida una versión mejorada, sin errores
                (bueno, quizá con algunos, pero todos adorables).
              </p>
              <p className="font-medium text-gray-800 font-sans">
                Feliz Día Mamá, mi <span className="italic">felicidad</span>.
              </p>
              <p className="text-gray-700 mt-2 font-sans">
                Con mucho{" "}
                <span className="text-pink-500 font-medium">cariño,</span>
              </p>
              <p className="font-medium text-gray-800 mt-1 font-sans">
                Tu hijo.
              </p>
              <div className="mt-3 p-2 bg-gray-100 rounded text-sm font-mono">
                <p className="text-pink-600">
                  "Gracias por darme la vida mamá, Te amo mucho mamá ❤️."
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
