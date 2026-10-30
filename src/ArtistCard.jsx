
import { useState } from "react";

const audioFiles = {
  "Led Zeppelin": "led-zeppelin.mp3",
  "Pearl Jam": "pearl-jam.mp3",
  "Boyz II Men": "boyz-ii-men.mp3",
};

function ArtistCard({ artist }) {
  const [showDetails, setShowDetails] = useState(false);
  const audioFile = audioFiles[artist.artist_name];

  const toggleDetails = () => {
    setShowDetails((previous) => !previous);
  };

  const handleKeyDown = (event) => {
    if (
      event.target === event.currentTarget &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      toggleDetails();
    }
  };

  return (
    <article
      onClick={toggleDetails}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={showDetails}
      aria-label={`${artist.artist_name} details`}
    >
      <h2>{artist.artist_name}</h2>
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
              onClick={(event) => event.stopPropagation()}
              onKeyDown={(event) => event.stopPropagation()}
            >
              Visit Official Website
            </a>
          </p>

          {audioFile && (
            <audio
              controls
              autoPlay
              onClick={(event) => event.stopPropagation()}
              onKeyDown={(event) => event.stopPropagation()}
            >
              <source
                src={`/audio/${audioFile}`}
                type="audio/mpeg"
              />
              Your browser does not support audio.
            </audio>
          )}
        </div>
      )}
    </article>
  );
}

export default ArtistCard;
