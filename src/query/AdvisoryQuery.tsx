import { useMutation, useQuery } from '@tanstack/react-query';
import BaseRequest from '@/based/config/axios.config';
const SUB_URL = `api/Advisory`;

const PagingModel = {
  pageNumber: 1,
  pageSize: 10,
  keyword: '',
  orderBy: '',
  orderDirection: '',
  totalRecord: 0,
  day: 0,
  week: 0,
  month: 0,
  year: 0,
  createdBy: '',
};

interface CreateAdvisory {
  id?: number;
  name: string;
  phone: string;
  message?: string;
  timeAdvisory: string;
}

export function useCreateAdvisory() {
  return useMutation({
    mutationKey: ['create_advisory'],
    mutationFn: async (model: CreateAdvisory) => {
      return BaseRequest.Post(`/${SUB_URL}/create-update-advisory`, model);
    },
  });
}
