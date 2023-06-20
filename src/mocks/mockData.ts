import { Pagination, UploadFileResponse } from '@/types/common';
import { Center } from '@/types/common/center';
import { CenterListResponse } from '@/types/response/center';

const nickNameList: string[] = ['test', 'test1', 'test2'];
export const nickNameStore = new Set(nickNameList);

export const center: Center = {
  profile_image: 'profile_image',
  name: 'name',
  address: 'address',
  detail_address: 'detail_address',
  tel: 'tel',
  web_url: 'web_url',
  instagram_name: 'instagram_name',
  youtube_code: 'youtube_code',
  image_list: ['image_list'],
  utility_list: ['utility_list'],
  fee_image_list: ['fee_image_list'],
  fee_list: [
    {
      name: 'name',
      price: 1000,
      count: 1,
    },
  ],
  operation_time_list: [
    {
      day_of_week: 'day_of_week',
      start_time: 'start_time',
      end_time: 'end_time',
    },
  ],
  hold_list: [
    {
      difficulty: 'difficulty',
      name: 'name',
    },
  ],
  wall_list: [
    {
      wall_type: 'wall_type',
      name: 'name',
    },
  ],
};

export const uploadedFileUrl: UploadFileResponse = {
  file_url: 'file_url',
};

export const centerList: Pagination<CenterListResponse> = {
  next_page_num: 0,
  previous_page_num: 0,
  total_num: 0,
  results: [
    {
      address: '서울특별시 강남구 역삼동 115-2',
      center_id: '0',
      detail_address: '',
      image_list: [],
      is_approved: true,
      lector_count: 5,
      matching_request_count: 3,
      member_count: 150,
      name: '더클라이밍 강남점',
      profile_image: `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    },
  ],
};
