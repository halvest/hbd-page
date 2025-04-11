import Slider from "react-slick";
import Image from "next/image";

export default function Gallery() {
  const photos = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-[Great_Vibes] text-pink-600 mb-10 fade-in">
        Kenangan Manis Kita 💖
      </h2>

      <div className="max-w-sm mx-auto">
        <Slider {...settings}>
          {photos.map((src, idx) => (
            <div key={idx} className="px-4">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={src}
                  alt={`Momen ${idx + 1}`}
                  width={400}
                  height={600}
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
