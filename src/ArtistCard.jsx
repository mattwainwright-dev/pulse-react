function ArtistCard({ artist }) {
  return (
    <article>
      <h2>{artist.artist_name}</h2>
      <p>{artist.genre}</p>
    </article>
  );
}

export default ArtistCard;