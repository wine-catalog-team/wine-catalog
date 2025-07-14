export interface Wine {
  id: number;
  wine: string;
  winery: string;
  rating: {
    average: string;
    reviews: string;
  };
  location: string;
  image: string;
  type: string;
  sweetness?: string;
  grapeVariety?: string;
  price?: string;
  vintage?: string;
}
