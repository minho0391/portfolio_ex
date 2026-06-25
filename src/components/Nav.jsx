function Nav({ data, onChangeMode, id }) {
  const lists = data.map(work => (
    <li key={work.id}>
      <button
        type="button"
        className={work.id === id ? "active" : ""}
        onClick={() => {
          onChangeMode(work.id);
        }}
      >
        {work.title}
      </button>
    </li>
  ));

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
}

export default Nav;
