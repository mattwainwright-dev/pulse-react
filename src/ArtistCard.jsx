import { useState } from "react";
const audioFiles = {
  "Led Zeppelin": "led-zeppelin.mp3",
  "Pearl Jam": "pearl-jam.mp3",
  "Boyz II Men": "boyz-ii-men.mp3",
};

function ArtistCard({ artist }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = (event) => {
    const audio = event.currentTarget.closest("article").querySelector("audio");

    if (showDetails) {
      audio?.pause();
      if (audio) audio.currentTime = 0;
    }

    setShowDetails(!showDetails);
  };

  const audioFile = audioFiles[artist.artist_name];

  return (
    <article>
      <h2>
        <button onClick={toggleDetails}>{artist.artist_name}</button>
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
          <audio controls autoPlay>
            <source src={`/audio/${audioFile}`} type="audio/mpeg" />
            Your browser does not support audio.
          </audio>
        </div>
      )}
    </article>
  );
}

export default ArtistCard;
