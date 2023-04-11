export interface OperationTime {
  day_of_week: string;
  start_time: string;
  end_time: string;
}

export interface Fee {
  name: string;
  price: number;
  count: number;
}

export interface Hold {
  difficulty: string;
  name: string;
}

export interface Wall {
  wall_type: string;
  name: string;
}

export interface Center {
  name: string;
  address: string;
}
