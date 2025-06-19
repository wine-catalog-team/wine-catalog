import { useEffect, useState } from "react";
import { CatalogHeader } from "./CatalogHeader";
import { CustomFilter } from "./CustomFilter";
import WineList from "./WineList";
import styles from "./CatalogPage.module.scss";
import type { Wine } from "../../Types/Wine";

export const CatalogPage = () => {
  const [wines, setWines] = useState<Wine[]>([]);
  const [query, setQuery] = useState("");
  const [filteredWines, setFilteredWines] = useState<Wine[]>([]);
  const [error, setError] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [wineType, setWineType] = useState<string[]>([]);
  const [sweetness, setSweetness] = useState<string[]>([]);
  const [grapeVariety, setGrapeVariety] = useState<string[]>([]);

  useEffect(() => {
    const urls = [
      "https://api.sampleapis.com/wines/reds",
      "https://api.sampleapis.com/wines/rose",
      "https://api.sampleapis.com/wines/whites",
      "https://api.sampleapis.com/wines/sparkling",
    ];

    Promise.all(urls.map((url) => fetch(url)))
      .then((responses) => {
        for (const res of responses) {
          if (!res.ok) throw new Error("Не вдалося завантажити вина");
        }
        return Promise.all(responses.map((res) => res.json()));
      })
      .then((data) => {
        const allWines = data.flatMap((wineArray, i) => {
          const types = ["reds", "rose", "whites", "sparkling"];

          return wineArray.map((wine: Wine) => ({
            ...wine,
            type: types[i],
            sweetness: ["Сухе", "Напівсухе", "Напівсолодке", "Солодке"][
              Math.floor(Math.random() * 4)
            ],
            grapeVariety: [
              "Cabernet Sauvignon",
              "Merlot",
              "Chardonnay",
              "Pinot Noir",
            ][Math.floor(Math.random() * 4)],
          }));
        });

        setWines(allWines);
        setFilteredWines(allWines);
      })
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    let result = wines;

    if (query) {
      result = result.filter((wine) =>
        wine.wine.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (wineType.length > 0) {
      result = result.filter(
        (wine) => wine.type && wineType.includes(wine.type.toLowerCase())
      );
    }

    if (sweetness.length > 0) {
      result = result.filter(
        (wine) => wine.sweetness && sweetness.includes(wine.sweetness)
      );
    }

    if (grapeVariety.length > 0) {
      result = result.filter(
        (wine) => wine.grapeVariety && grapeVariety.includes(wine.grapeVariety)
      );
    }

    result.sort((a, b) => a.wine.localeCompare(b.wine));

    setFilteredWines(result);
    setCurrentPage(1);
  }, [query, wines, wineType, sweetness, grapeVariety]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredWines.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredWines.length / itemsPerPage);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    pages.push(1);

    if (startPage > 2) pages.push("...");

    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== totalPages) pages.push(i);
    }

    if (endPage < totalPages - 1) pages.push("...");
    if (totalPages !== 1) pages.push(totalPages);

    return pages;
  };

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.catalog}>
          <CatalogHeader
            query={query}
            onSearchChange={(value) => {
              setQuery(value);
            }}
          />
          {error && <p style={{ color: "white" }}>{error}</p>}
        </div>
      </section>

      <section className={styles.catalogSection}>
        <div className={styles.filters}>
          <CustomFilter
            title="Тип вина"
            options={["reds", "rose", "whites", "sparkling"]}
            selected={wineType}
            onChange={setWineType}
          />

          <CustomFilter
            title="Солодкість"
            options={["Сухе", "Напівсухе", "Напівсолодке", "Солодке"]}
            selected={sweetness}
            onChange={setSweetness}
          />

          <CustomFilter
            title="Сорт винограду"
            options={[
              "Cabernet Sauvignon",
              "Merlot",
              "Chardonnay",
              "Pinot Noir",
            ]}
            selected={grapeVariety}
            onChange={setGrapeVariety}
          />

          <label className={styles.itemsPerPageLabel}>
            <select
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              value={itemsPerPage}
            >
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={32}>32</option>
            </select>
          </label>
        </div>
        <div className={styles.catalog}>
          <WineList
            currentItems={currentItems}
            currentPage={currentPage}
            totalPages={totalPages}
            getPageNumbers={getPageNumbers}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
};

export default CatalogPage;
