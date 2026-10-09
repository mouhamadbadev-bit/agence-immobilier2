export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  imageUrl: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string;
}