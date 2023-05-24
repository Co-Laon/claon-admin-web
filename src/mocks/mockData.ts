import { UploadFileResponse } from '../types/common';
import { Center } from '../types/common/center';

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
