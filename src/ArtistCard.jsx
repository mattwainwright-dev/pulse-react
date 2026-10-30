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
          <p>
            <strong>Origin:</strong> {artist.origin}
          </p>
          <p>
            <strong>Formed:</strong> {artist.formed_year}
          </p>
          <p>
            <strong>Bio:</strong> {artist.bio}
          </p>
          <p>
            <a
              href={artist.official_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Official Website
            </a>
          </p>
        </div>
      )}
    </article>
  );
}

export default ArtistCard;
