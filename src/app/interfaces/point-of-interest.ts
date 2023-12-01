export interface PointOfInterest {
  id: number;
  name: string;
  description?: string;
  cityId: number;
}

export interface NewPointOfInterest {
  name: string;
  description?: string;
  cityId: number;
}

export interface UpdatePointOfInterest {
  name?: string;
  description?: string;
}
