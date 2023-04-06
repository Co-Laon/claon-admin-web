export interface Profile {
  profile_image: string;
  nickname: string;
  email: string;
  instagram_nickname?: string;
  role: 'lector' | 'manager';
}
