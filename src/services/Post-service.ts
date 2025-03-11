import apiClient,{CanceledError} from "./api-client";
export {CanceledError}

export interface Post {
    title: string;
    content: string;
    owner: string;
    _id: string;
} 

class PostService {
    getAllPosts () {
        const abortController = new AbortController();
        const request = apiClient.get<Post[]>('posts', {signal: abortController.signal})
        return {request, cancel: () => abortController.abort()};
    }

}

export default new PostService();