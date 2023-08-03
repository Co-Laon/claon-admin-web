export interface CenterFeeResponse {
  center_fee_id: string;
  name: string;
  fee_type: 'package' | 'member' | 'course';
  price: number;
  count: number;
  period: number;
  period_type: 'day' | 'week' | 'month';
  is_deleted: boolean;
}

export interface FeeResponse {
  fee_img: string[];
  center_fee: CenterFeeResponse[];
}
