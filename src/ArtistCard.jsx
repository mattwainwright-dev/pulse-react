import { useState } from "react";

function ArtistCard({ artist }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article>
      <h2>
        <button onClick={() => setShowDetails(!showDetails)}>
          {artist.artist_name}
        </button>
      </h2>
      <p>{artist.genre}</p>

      {showDetails && (
        <div>
          <p><strong>Origin:</strong> {artist.origin}</p>
          <p><strong>Formed:</strong> {artist.formed_year}</p>
          <p><strong>Bio:</strong> {artist.bio}</p>
        </div>
      )}
    </article>
  );
}

export default ArtistCard;