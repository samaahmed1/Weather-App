import Card from "../utils/Crad";
import Controls from "../utils/Controls";

export default function Home() {
  return (
    <section className="py-14 text-white">
      <div className="container px-5 mx-auto">
        <h1 className="text-center text-2xl md:text-4xl font-medium">
          Seeing the weather of the whole world <br /> with <span className="font-bold bg-gradient-to-r from-[#CAECFF] to-[#78CFFF] text-transparent bg-clip-text">Dark Weather!</span>
        </h1>
        <Controls />
        <Card />
      </div>
    </section>
  );
}
