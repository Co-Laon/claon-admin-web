export interface ProfileResponse {
  profile_image: string;
  nickname: string;
  email: string;
  instagram_nickname: string;
  role: string;
}
export interface LectorRegisterResponse {
  is_proofed: boolean;
  profile: ProfileResponse;
}
export interface FileResponse {
  file_url: string;
}
