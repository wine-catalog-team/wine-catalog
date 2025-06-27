/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CatalogHeader } from "./CatalogHeader";
import { CustomFilter } from "./CustomFilter";
import WineList from "./WineList";
import styles from "./CatalogPage.module.scss";
import type { Wine } from "../../Types/Wine";
import { SortFilter } from "./SortFilter";
import { FilterPopup } from "../../components/FilterPopup/FilterPopup";

export const CatalogPage = () => {
  const [wines, setWines] = useState<Wine[]>([]);
  const [query, setQuery] = useState("");
  const [filteredWines, setFilteredWines] = useState<Wine[]>([]);
  const [error, setError] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [sortBy, setSortBy] = useState(
    () => localStorage.getItem("sortBy") || ""
  );
  const location = useLocation();
  const [wineType, setWineType] = useState<string[]>(() => {
    const saved = localStorage.getItem("wineType");

    if (location.state?.wineType) {
      return location.state.wineType;
    }

    return saved ? JSON.parse(saved) : [];
  });

  const [sweetness, setSweetness] = useState<string[]>(() => {
    const saved = localStorage.getItem("sweetness");
    return saved ? JSON.parse(saved) : [];
  });
  const [grapeVariety, setGrapeVariety] = useState<string[]>(() => {
    const saved = localStorage.getItem("grapeVariety");
    return saved ? JSON.parse(saved) : [];
  });

  const sweetnessOptions = ["Сухе", "Напівсухе", "Напівсолодке", "Солодке"];

  const getSweetnessById = (id: number): string => {
    return sweetnessOptions[id % sweetnessOptions.length];
  };

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
            sweetness: getSweetnessById(wine.id),
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
    const cleanSortBy = sortBy.replace(/-forced-\d+$/, "");

    let result = [...wines];

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

    if (cleanSortBy === "rating") {
      result.sort(
        (a, b) => Number(b.rating.average) - Number(a.rating.average)
      );
    } else if (cleanSortBy === "popularity") {
      result.sort(
        (a, b) => parseInt(b.rating.reviews) - parseInt(a.rating.reviews)
      );
    } else {
      result.sort((a, b) => a.wine.localeCompare(b.wine));
    }

    setFilteredWines(result);
    setCurrentPage(1);
  }, [query, wines, wineType, sweetness, grapeVariety, sortBy]);

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

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy]);

  useEffect(() => {
    localStorage.setItem("wineType", JSON.stringify(wineType));
  }, [wineType]);

  useEffect(() => {
    localStorage.setItem("sweetness", JSON.stringify(sweetness));
  }, [sweetness]);

  useEffect(() => {
    localStorage.setItem("grapeVariety", JSON.stringify(grapeVariety));
  }, [grapeVariety]);

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
        <div className={styles.filtersRow}>
          <div className={styles.filters}>
            <CustomFilter
              key={`wineType-${wineType.join(",")}`}
              title="Тип вина"
              options={["reds", "rose", "whites", "sparkling"]}
              selected={wineType}
              onChange={setWineType}
            />

            <CustomFilter
              key={`sweetness-${sweetness.join(",")}`}
              title="Солодкість"
              options={["Сухе", "Напівсухе", "Напівсолодке", "Солодке"]}
              selected={sweetness}
              onChange={setSweetness}
            />

            <CustomFilter
              key={`grapeVariety-${grapeVariety.join(",")}`}
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
          </div>
          <div className={styles.actionsRow}>
            <div className={styles.mobileControls}>
              <button
                className={styles.actionButton}
                onClick={() => setIsFilterOpen(true)}
              >
                <img
                  src="/img/filter.svg"
                  alt="Фільтр"
                  className={styles.filterIcon}
                />
                ФІЛЬТРУВАТИ
              </button>

              <FilterPopup
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                wineType={wineType}
                sweetness={sweetness}
                grapeVariety={grapeVariety}
                setWineType={setWineType}
                setSweetness={setSweetness}
                setGrapeVariety={setGrapeVariety}
              />

              <img
                src="/img/sort.svg"
                alt="Сортування"
                className={styles.sortIcon}
              />
              <SortFilter
                key={sortBy}
                title="Сортування"
                selected={sortBy}
                onChange={(value) => {
                  setSortBy(value);
                }}
                options={[
                  { value: "", label: "Назва (А-Я)" },
                  { value: "rating", label: "За рейтингом" },
                  { value: "popularity", label: "За популярністю" },
                ]}
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
          </div>
        </div>

        <div className={styles.resultsCount}>
          <p className={styles.resultsTitle}>
            Результати пошуку
            {query && ` “${query}”`}
          </p>

          <div className={styles.countAndFilters}>
            <span className={styles.countText}>
              Знайдено {filteredWines.length} товарів
            </span>

            {[...wineType, ...sweetness, ...grapeVariety].map((filter) => (
              <span key={filter} className={styles.filterTag}>
                <strong>{filter}</strong>
                <button
                  className={styles.removeBtn}
                  onClick={() => {
                    setWineType((prev) => prev.filter((f) => f !== filter));
                    setSweetness((prev) => prev.filter((f) => f !== filter));
                    setGrapeVariety((prev) => prev.filter((f) => f !== filter));
                  }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
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
