interface CenterFeeRequest {
  center_fee_id?: string;
  name: string;
  fee_type: 'package' | 'member' | 'course';
  price: number;
  count: number;
  period: number;
  period_type: 'day' | 'week' | 'month';
}

interface UpdateCenterFeeRequest {
  fee_img: string[];
  center_fee: CenterFeeRequest[];
}
