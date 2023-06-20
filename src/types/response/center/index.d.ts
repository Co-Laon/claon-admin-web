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
