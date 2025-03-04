import weather from "../data/weather.json";
export default function Card() {
  return (
    <section>
      <div className="container px-5 mx-auto flex justify-center lg:justify-between items-center lg:gap-0 flex-wrap gap-7">
        {weather.map((item) => (
          <div key={item.id} className="card bg-[#24343D] w-60 p-7 flex flex-col gap-5 rounded-lg text-lg">
            <img className="mx-auto" src={item.image} alt={item.status} />
            <h2 className="font-bold text-3xl">
              {item.country}
              <span className="inline-block ml-4 font-light">{item.degree}</span>
            </h2>
            <p>
              wind speed :<span>{item.windSpeed}</span>
            </p>
            <p>
              Tuesday :<span>{item.time}</span>
            </p>
            <p>{item.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
