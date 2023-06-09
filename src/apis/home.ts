import { useAxios } from "@/lib/axios/useAxios";
import { useQueries } from "@tanstack/react-query";
import { getSettingCacheTime } from "@/lib/query/client";
import { queryKeys } from "@/constants/queryKeys";
import { masterListCode } from "@/constants/appConstants";
import {
  MasterlistByGroupCodeRequest,
  MasterlistByGroupCodeResponse,
} from "@/types/home";

export const useQueriesMasterlist = () => {
  const { method } = useAxios();
  const groupCodes = Object.values(masterListCode);

  return useQueries({
    queries: groupCodes.map((groupCode) => ({
      queryKey: [queryKeys.masterList, groupCode],
      queryFn: async () => {
        const res = await method.get<
          MasterlistByGroupCodeRequest,
          MasterlistByGroupCodeResponse
        >("masterlist/get-masterlist-by-group-code", {
          groupCode,
        });
        return { [groupCode]: res.data.data };
      },
      ...getSettingCacheTime(),
    })),
  });
};
