import { Pagination, UploadFileResponse } from '@/types/common';
import { Center } from '@/types/common/center';
import {
  CenterDetailResponse,
  CenterListResponse,
} from '@/types/response/center';

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
      image_list: [
        `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
        `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
        `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
      ],
      is_approved: true,
      lector_count: 5,
      matching_request_count: 3,
      member_count: 150,
      name: '더클라이밍 강남점',
      profile_image: `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    },
    {
      address: '서울특별시 강남구 홍대동 115-2',
      center_id: '1',
      detail_address: '',
      image_list: [
        `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
        `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
        `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
      ],
      is_approved: true,
      lector_count: 5,
      matching_request_count: 3,
      member_count: 150,
      name: '더클라이밍 홍대점',
      profile_image: `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    },
    {
      address: '서울특별시 강남구 분당동 115-1',
      center_id: '2',
      detail_address: '',
      image_list: [
        `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
        `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
        `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
      ],
      is_approved: true,
      lector_count: 5,
      matching_request_count: 3,
      member_count: 150,
      name: '더클라이밍 분당점',
      profile_image: `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    },
  ],
};

export const centerDetail1: CenterDetailResponse = {
  profile_image: `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
  name: '클라온',
  address: '서울특별시 강남구 역삼동 111-11',
  detail_address: '',
  tel: '02-0000-0000',
  web_url: 'admin.claon.life',
  instagram_name: 'claon__official',
  youtube_code: '@claon',
  image_list: [
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
  ],
  operating_time_list: [
    {
      day_of_week: '월',
      start_time: '10:00',
      end_time: '20:00',
    },
    {
      day_of_week: '화',
      start_time: '1:00',
      end_time: '20:00',
    },
    {
      day_of_week: '수',
      start_time: '10:05',
      end_time: '20:00',
    },
    {
      day_of_week: '목',
      start_time: '10:00',
      end_time: '20:00',
    },
    {
      day_of_week: '금',
      start_time: '10:00',
      end_time: '21:00',
    },
  ],
  utility_list: ['사물함', '샤워실', '휴게실'],
  approved: true,
  center_id: '0',
  fee_image_list: [`${process.env.NEXT_PUBLIC_S3}/profile/default.svg`],
  fee_list: [{ count: 0, name: '', price: 1345 }],
  hold_info: {
    is_color: true,
    hold_list: [
      {
        difficulty: '#010101',
        name: '빨강',
      },
      {
        difficulty: '#ff0000',
        name: '파랑',
      },
    ],
  },
  wall_list: [
    {
      name: '1',
      wall_type: 'bouldering',
    },
  ],
};

export const centerDetail2: CenterDetailResponse = {
  profile_image: `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
  name: '클라온 홍대점',
  address: '서울특별시 강남구 홍대동 111-11',
  detail_address: '',
  tel: '02-0000-0000',
  web_url: 'admin.claon.life',
  instagram_name: 'claon__official',
  youtube_code: '@claon',
  image_list: [
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
  ],
  operating_time_list: [
    {
      day_of_week: '월',
      start_time: '10:00',
      end_time: '20:00',
    },
    {
      day_of_week: '화',
      start_time: '1:00',
      end_time: '20:00',
    },
    {
      day_of_week: '수',
      start_time: '10:05',
      end_time: '20:00',
    },
    {
      day_of_week: '목',
      start_time: '10:00',
      end_time: '20:00',
    },
    {
      day_of_week: '금',
      start_time: '10:00',
      end_time: '21:00',
    },
  ],
  utility_list: ['사물함', '샤워실', '휴게실'],
  approved: false,
  center_id: '1',
  fee_image_list: [`${process.env.NEXT_PUBLIC_S3}/profile/default.svg`],
  fee_list: [{ count: 0, name: '', price: 1345 }],
  hold_info: {
    is_color: true,
    hold_list: [
      {
        difficulty: '#010101',
        name: '빨강',
      },
      {
        difficulty: '#ff0000',
        name: '파랑',
      },
    ],
  },
  wall_list: [
    {
      name: '1',
      wall_type: 'bouldering',
    },
  ],
};

export const centerDetail3: CenterDetailResponse = {
  profile_image: `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
  name: '클라온 분당점',
  address: '서울특별시 강남구 홍대동 111-11',
  detail_address: '',
  tel: '02-0000-0000',
  web_url: 'admin.claon.life',
  instagram_name: 'claon__official',
  youtube_code: '@claon',
  image_list: [
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
    `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`,
  ],
  operating_time_list: [
    {
      day_of_week: '월',
      start_time: '10:00',
      end_time: '20:00',
    },
    {
      day_of_week: '화',
      start_time: '1:00',
      end_time: '20:00',
    },
    {
      day_of_week: '수',
      start_time: '10:05',
      end_time: '20:00',
    },
    {
      day_of_week: '목',
      start_time: '10:00',
      end_time: '20:00',
    },
    {
      day_of_week: '금',
      start_time: '10:00',
      end_time: '21:00',
    },
  ],
  utility_list: ['사물함', '샤워실', '휴게실'],
  approved: true,
  center_id: '2',
  fee_image_list: [`${process.env.NEXT_PUBLIC_S3}/profile/default.svg`],
  fee_list: [{ count: 0, name: '', price: 1345 }],
  hold_info: {
    is_color: true,
    hold_list: [
      {
        difficulty: '#010101',
        name: '빨강',
      },
      {
        difficulty: '#ff0000',
        name: '파랑',
      },
    ],
  },
  wall_list: [
    {
      name: '1',
      wall_type: 'bouldering',
    },
  ],
};
