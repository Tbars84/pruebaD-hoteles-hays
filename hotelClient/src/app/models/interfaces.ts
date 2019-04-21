export interface hotelIn {
  id: string,
  name: string,
  stars: number,
  price: number,
  image: string,
  amenities?: string[]
}

export interface loadMoreStatus {
  available: boolean,
  limit: number,
  skip: number,
  total: number,
}

export interface ApiCallIn {
  data: hotelIn[],
  loadMoreEv: loadMoreStatus,
}

