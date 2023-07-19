/**
 * 작성자: 윤웅재
 * 공통 인터페이스 Claon Pagination, 유명한 이름이라 바꿔야 할 수도 있음
 */
export interface Pagination<T> {
  next_page_num: number;
  previous_page_num: number;
  results: T[];
  total_num: number;
}

export interface CommonError {
  code: string;
  message: string;
}

export interface ValidationErrorMessage {
  loc: string;
  message: string;
  type: string;
}

export interface ValidationError extends CommonError {
  message: ValidationErrorMessage[];
}
export interface HttpValidationError {
  detail: ValidationErrorMessage[];
}

export interface UploadFileRequest {
  file: File[] | File;
}

export interface UploadFileResponse {
  file_url: string;
}
