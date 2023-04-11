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

export interface CenterNameResponse {
  center_id: string;
  name: string;
  address: string;
}
export interface Center {
  profile_image: string;
  name: string;
  address: string;
  detail_address?: string;
  tel: string;
  web_url?: string;
  instagram_name?: string;
  youtube_code?: string;
  image_list: string[];
  utility_list: string[];
  fee_image_list: string[];
  fee_list: Fee[];
  operation_time_list: OperationTime[];
  hold_list: Hold[];
  wall_list: Wall[];
}
