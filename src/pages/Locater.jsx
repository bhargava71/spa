import { useState } from "react";

const Locater = [
  {
    city: "VIJAYAWADA",
    name: "GRT Jewellers - Taraka Rama Rd",
    address: "Door No 11-140, Opposite Bombay Jewellery, Beside Sri Laxmi Theatre Road, Vijayawada - 520010",
    phone: "+91 8662481895",
  },
  {
    city: "VIJAYAWADA",
    name: "GRT Jewellers - MG Road",
    address: "Near Hotel Manohar, Vijayawada",
    phone: "+91 9908121132",
  },
  {
    city: "GUNTUR",
    name: "GRT Jewellers - Brodipet",
    address: "Andhra Comfort Junction",
    phone: "0863-2332456 | +91 9908121137",
  },

  {
    city: "HYDERABAD",
    name: "GRT Jewellers - Kukatpally",
    address: "Zudio Store, Opp. More, Metro Central, Kukatpally, Hyderabad - 500072",
    phone: "+91 9985915588",
  },
  {
    city: "HYDERABAD",
    name: "GRT Jewellers - Abids Road",
    address: "6-1-91 Ground Floor, G.L.A.R Arcade, P.G. Road, Hyderabad - 500003",
    phone: "04024743333 | +91 9985123456",
  },
  {
    city: "HYDERABAD",
    name: "GRT Jewellers - Banjara Hills",
    address: "Plot No. 126, Road No. 2, Maheshwari Complex, Banjara Colony Main Road, Hyderabad - 500034",
    phone: "+91 9985123088",
  },
];

export default function LocaterList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  // Filtered locations based on search and dropdown
  const filteredLocations = Locater.filter((loc) => {
    return (
      (filter === "ALL" || loc.city === filter) &&
      loc.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6 ml-[66px]">
      <div className="max-w-6xl mx-auto">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row justify-start items-center mb-6 gap-4">
          <select
            className="p-2 border rounded-md bg-white shadow-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="ALL">ALL</option>
            <option value="Andhrapradesh">Andhrapradesh</option>
            <option value="Telegenana">Telegenana</option>
          </select>
          <input
            type="text"
            placeholder="Search Gallery Site..."
            className="p-2 border rounded-md w-[183px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-md rounded-md border border-gray-200"
              >
                <div className="h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Image Placeholder</span>
                </div>
                <h2 className="text-purple-700 font-semibold">{location.city}</h2>
                <h3 className="font-bold text-lg">{location.name}</h3>
                <p className="text-sm text-gray-600">{location.address}</p>
                <p className="mt-2 font-semibold text-gray-700">{location.phone}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
