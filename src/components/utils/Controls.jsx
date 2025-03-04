export default function Controls() {
  return (
    <section className="py-14">
      <div className="container px-5 mx-auto flex justify-center lg:justify-between items-center gap-10 lg:gap-0 flex-wrap">
        <div className="search">
          <input className="bg-[#24343D] p-4 rounded-lg w-60 outline-none border-none" placeholder="Search Here" type="search" name="search" id="search" />
        </div>
        <div className="filter bg-[#24343D] flex items-center gap-3 md:gap-10 p-4 rounded-lg flex-wrap justify-center">
          <span className="text-lg">Filters</span>
          <select className="bg-[#24343D] outline-none border border-[#FFFFFF78] p-2 text-center rounded-lg" id="temperatureFilter" name="temperature">
            <option value="coldest">Coldest</option>
            <option value="hottest">Hottest</option>
          </select>
          <select className="bg-[#24343D] outline-none border border-[#FFFFFF78] p-2 text-center rounded-lg" id="rangeFilter" name="temperatureRange">
            <option value="0-10">0°C - 10°C</option>
            <option value="10-20">10°C - 20°C</option>
            <option value="20-30">20°C - 30°C</option>
            <option value="30+">Above 30°C</option>
          </select>
          <select className="bg-[#24343D] outline-none border border-[#FFFFFF78] p-2 text-center rounded-lg" id="weatherFilter" name="weatherType">
            <option value="Rainy">Rainy</option>
            <option value="Sunny">Sunny</option>
            <option value="Cloudy">Cloudy</option>
          </select>
        </div>
      </div>
    </section>
  );
}
