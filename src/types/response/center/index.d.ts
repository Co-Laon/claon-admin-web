export interface CenterListResponse {
  center_id: string;
  profile_image: string;
  name: string;
  address: string;
  detail_address: string;
  image_list: string[];
  lector_count: number;
  member_count: number;
  matching_request_count: number;
  is_approved: boolean;
}

export interface OperatingTimeListResponse {
  day_of_week: string;
  start_time: string;
  end_time: string;
}

export interface FeeListResponse {
  name: string;
  price: number;
  count: number;
}

export interface HoldListResponse {
  difficulty: string;
  name: string;
}

export interface HoldInfoResponse {
  is_color: boolean;
  hold_list: HoldListResponse[];
}

export interface WallListResponse {
  wall_type: 'endurance' | 'bouldering';
  name: string;
}

export interface CenterDetailResponse {
  center_id: string;
  profile_image: string;
  name: string;
  address: string;
  detail_address: string;
  tel: string;
  web_url: string;
  instagram_name: string;
  youtube_code: string;
  image_list: string[];
  utility_list: string[];
  fee_image_list: string[];
  operating_time_list: OperatingTimeListResponse[];
  fee_list: FeeListResponse[];
  hold_info: HoldInfoResponse;
  wall_list: WallListResponse[];
  approved: boolean;
}
