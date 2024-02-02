import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import NewsList from "@/components/newsList";
import { Photos } from "@/types";
import Image from "next/image";

const photos: Photos = [
  { image: "/image1.jpg", text: "会社のそば１" },
  { image: "/image2.jpg", text: "会社のそば２" },
  { image: "/image3.jpg", text: "会社のそば３" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start space-y-5">
      <div className="flex justify-center text-2xl">トップページ</div>
      <div className="flex justify-center h-60 pb-5">
        <Image
          src={"/top_main_image.jpg"}
          alt="photo gallery"
          width={500}
          height={300}
        />
      </div>

      <div className="flex justify-between">
        <div className="w-1/2 flex flex-col items-center">
          <div className="w-full flex justify-center text-lg mb-5 px-4">
            <div className="w-full text-center max-w-xs">
              <Card>写真館</Card>
            </div>
          </div>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <div className="flex text-lg ml-5 pt-4">{photo.text}</div>
                    <CardContent className="flex aspect-square items-start justify-center p-6">
                      <Image
                        src={photo.image}
                        alt={`photo gallery ${index + 1}`}
                        width={300}
                        height={200}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <NewsList />
      </div>
    </main>
  );
}
