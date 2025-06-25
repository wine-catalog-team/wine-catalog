import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ProductDetailsPage.module.scss";
import type { Wine } from "../../Types/Wine";
import Branch from "../../components/Branch";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [wine, setWine] = useState<Wine | null>(null);
  const [recommendedWines, setRecommendedWines] = useState<Wine[]>([]);
  const [error, setError] = useState("");
  const { pathname } = window.location;
  const location = useLocation();
  const wineTypeFromState = location.state?.type;

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
          if (!res.ok) throw new Error("Помилка завантаження вина");
        }
        return Promise.all(responses.map((res) => res.json()));
      })
      .then((data) => {
        const types = ["reds", "rose", "whites", "sparkling"];

        const allWines = data.flatMap((wineArray, i) => {
          return wineArray.map((wine: Wine) => {
            const vintageMatch = wine.wine.match(/\b(19|20)\d{2}\b/);
            const price = `${Math.floor(Math.random() * 800 + 200)} грн`;

            return {
              ...wine,
              type: types[i],
              sweetness: getSweetnessById(wine.id),

              grapeVariety: [
                "Cabernet Sauvignon",
                "Merlot",
                "Chardonnay",
                "Pinot Noir",
              ][Math.floor(Math.random() * 4)],
              vintage: vintageMatch ? vintageMatch[0] : "N/A",
              price,
            };
          });
        });

        const foundWine = allWines.find(
          (w) => String(w.id) === id && w.type === wineTypeFromState
        );
        if (foundWine) {
          setWine(foundWine);
          const filteredWines = allWines.filter((w) => w.id !== foundWine.id);
          const shuffled = filteredWines.sort(() => 0.5 - Math.random());
          setRecommendedWines(shuffled.slice(0, 3));
        } else {
          setError("Вино не знайдено");
        }
      })
      .catch((err) => setError(err.message));
  }, [id, wineTypeFromState]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  if (error)
    return (
      <div className={styles.container}>
        <p>{error}</p>
      </div>
    );

  if (!wine)
    return (
      <div className={styles.container}>
        <p>Завантаження...</p>
      </div>
    );

  const [country, region] = wine.location.split("\n\u00b7\n");

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <a href="/">Головна</a> / <a href="/catalog">Каталог</a> / {wine.wine}
      </div>

      <div className={styles.productSection}>
        <img src={wine.image} alt={wine.wine} className={styles.productImage} />
        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{wine.wine}</h1>
          <p className={styles.productDescription}>
            {wine.winery} — це вино, створене з любов’ю до традицій. Солодкість:{" "}
            {wine.sweetness}, сорт винограду: {wine.grapeVariety}.
          </p>
          <div className={styles.productDetails}>
            <p>
              <span>Тип:</span> {wine.type}
            </p>
            <p>
              <span>Солодкість:</span> {wine.sweetness}
            </p>
            <p>
              <span>Сорт винограду:</span> {wine.grapeVariety}
            </p>
            <p>
              <span>Рік виробництва:</span> {wine.vintage}
            </p>
            <p>
              <span>Країна:</span> {country || "N/A"}
            </p>
            <p>
              <span>Регіон:</span> {region || "N/A"}
            </p>
            <p>
              <span>Ціна:</span> {wine.price}
            </p>
            <p>
              <span>Рейтинг:</span> {wine.rating.average} з{" "}
              {wine.rating.reviews} відгуків
            </p>
          </div>
          <Link to="/map" className={styles.button}>
            Адреси Магазинів
          </Link>
        </div>
      </div>

      <Branch />

      <div className={styles.recommended}>
        <h2>Ще більше смаку VINARI</h2>
        <div className={styles.recommendationGrid}>
          {recommendedWines.map((recWine) => (
            <Link
              key={recWine.id}
              to={`/catalog/${recWine.id}`}
              className={styles.link}
            >
              <div className={styles.recommendCard}>
                <img
                  src={recWine.image}
                  alt={recWine.wine}
                  className={styles.productImage}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/img/Page-not-found.jpg";
                  }}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.name}>{recWine.wine}</h3>
                  <p className={styles.winery}>{recWine.winery}</p>
                  <p className={styles.location}>{recWine.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.showAllWrapper}>
          <Link to="/catalog" className={styles.showAllButton}>
            Показати всі
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
