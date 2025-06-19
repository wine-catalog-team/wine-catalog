export const getWines = async () => {
  const urls = [
    "https://api.sampleapis.com/wines/reds",
    "https://api.sampleapis.com/wines/rose",
    "https://api.sampleapis.com/wines/whites",
    "https://api.sampleapis.com/wines/sparkling",
  ];

  const wineTypes = {
    reds: "red",
    rose: "rose",
    whites: "white",
    sparkling: "sparkling",
  };

  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));

    for (const res of responses) {
      if (!res.ok) {
        throw new Error("Failed to fetch some wine categories");
      }
    }

    const data = await Promise.all(responses.map((res) => res.json()));

    const allWines = data.flat().map((wine, index) => ({
      ...wine,
      type: wineTypes[Object.keys(wineTypes)[index] as keyof typeof wineTypes],
    }));

    return allWines;
  } catch {
    throw new Error("Failed to fetch wines");
  }
};
