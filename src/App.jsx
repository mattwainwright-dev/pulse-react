import useFetchData from "./useFetchData.js";
import ArtistCard from "./ArtistCard.jsx";

function App() {
  const { records, loading, error } = useFetchData(
    "https://student-data-api.mwwainwright1014-9d9.workers.dev/api/v1/datasets/pulse-artists/records?limit=20",
  );
  console.log(records);
  if (loading) {
    return <h1>loading</h1>;
  }

  const selectedArtists = records.filter((artist) =>
    ["Led Zeppelin", "Pearl Jam", "Boyz II Men"].includes(artist.artist_name),
  );

  return (
    <div>
      <h1>PULSE Artist Explorer</h1>
      <p>
        Music fans need a simple way to discover artists because finding
        reliable band information can be frustrating. My page will let users
        browse artists and explore their details.
      </p>
      {selectedArtists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
}

export default App;
