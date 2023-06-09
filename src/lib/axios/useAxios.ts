import { AxiosRequestConfig, AxiosResponse } from 'axios';

import http from './http';

export const useAxios = () => {
  const get = <Req, Res>(
    path: string,
    params?: Req,
    config?: AxiosRequestConfig<any> | undefined,
  ): Promise<AxiosResponse<Res, any>> => {
    return http.get<Req, AxiosResponse<Res>>(path, { params, ...config });
  };

  return { method: { get } };
};
