export class BaseResponse {
  static success(message = 'success', data?: any | any[]) {
    return {
      success: true,
      message: message,
      data: data ?? [],
    };
  }
  static error(message = 'error', data?: any | any[]) {
    return {
      success: false,
      message: message,
      data: data ?? [],
    };
  }
}
