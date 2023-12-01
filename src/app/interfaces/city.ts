import { PointOfInterest } from "./point-of-interest";

export interface City {
  id: number;
  name: string;
  description?: string;
  pointsOfInterest?: PointOfInterest[];
}

export interface NewCity {
  name: string;
  description?: string;
}
