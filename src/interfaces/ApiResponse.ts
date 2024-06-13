/* eslint-disable @typescript-eslint/no-explicit-any */
export type ApiError = any;

interface ApiResponse<T = any> {
    status: string;
    message: string;
    data?: T;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors?: ApiError[];
}

export default ApiResponse;
