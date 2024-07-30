import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { DataItem } from "../types/Data";
import { BASE_URL } from "../utils/constants";

export default function useApi(url: string, queryKey: string[] = [], enabled = true) {
  const { data, refetch } = useQuery<AxiosResponse<DataItem[]>>({
    queryKey,
    queryFn: () => axios.get(BASE_URL + url),
    enabled
  });

  return {
    data: data?.data ?? [],
    refetch,
  }
}