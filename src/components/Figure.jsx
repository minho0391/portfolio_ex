function Figure({ data }) {
  const { title, url, desc } = data;

  return (
    <figure>
      <img src={url} alt={title} />
      <figcaption>
        <strong>{title}</strong>
        <p>{desc}</p>
      </figcaption>
    </figure>
  );
}

export default Figure;
