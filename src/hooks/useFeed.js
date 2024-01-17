import { useQuery } from "@tanstack/react-query"
import {request} from "../utils/common"
import { REGION } from "../utils/constans"

export const useFeed = () => {
    const getFeed = async () => {
        const response = await request({
            path: `index/Tiktok/getFeedVideoListByRegion?region=${REGION}&count=20` 
        })
        return response
    }
    const { data, isLoading } = useQuery({
        queryKey: ["feed"],
        queryFn: getFeed
    });

    return {data: data?.data || [], isLoading}
}
