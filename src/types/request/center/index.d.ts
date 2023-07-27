export interface OperatingTimeListRequest {
  day_of_week: string;
  start_time: string;
  end_time: string;
}

export interface HoldListRequest {
  difficulty: string;
  name: string;
}

export interface HoldInfoRequest {
  is_color: boolean;
  hold_list: HoldListRequest[];
}

export interface WallListRequest {
  wall_type: 'endurance' | 'bouldering';
  name: string;
}

export interface CenterDetailRequest {
  profile_image: string;
  address: string;
  detail_address: string;
  tel: string;
  web_url: string;
  instagram_name: string;
  youtube_code: string;
  image_list: string[];
  utility_list: string[];
  operating_time_list: OperatingTimeListRequest[];
}

export interface CenterUpdateRequest {
  center: CenterDetailRequest;
  hold_info: HoldInfoRequest;
  wall_list: WallListRequest[];
}
