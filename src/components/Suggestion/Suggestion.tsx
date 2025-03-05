import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";

interface SuggestionProps {}

function Suggestion({}: SuggestionProps) {
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          // autoplay: true,
          // interval: 3000,
          loop: true,
        }}
        className="w-full max-w-sm relative"
      >
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-10">
          <span className="text-xl">&lt;</span>
        </CarouselPrevious>
        <CarouselContent className="grid grid-cols-3 overflow-hidden">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="transition-all duration-300"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-10"></CarouselNext>
      </Carousel>
    </div>
  );
}

export default Suggestion;
