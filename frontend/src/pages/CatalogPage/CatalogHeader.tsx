import "./CatalogHeader.scss";

type Props = {
  query: string;
  onSearchChange: (value: string) => void;
};

export const CatalogHeader = ({
  query,
  onSearchChange,
}: Props) => {
  return (
    <section className="heroSection">
      <div className="catalog">
        <h1 className="text">Колекція вин</h1>
        <p className="description">
          Оберіть своє вино серед колекції VINARI — з повагою до ремесла,
          натхненням і любов’ю до справжнього.
        </p>

        <form
          className="searchForm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="search"
            placeholder="Пошук вина..."
            value={query}
            onChange={(e) => onSearchChange(e.target.value)}
          />

          <button className="searchBtn" type="submit">
            Шукати
          </button>


        </form>
      </div>
    </section>
  );
};
