import { useEffect, useState } from 'react';
import postService, { CanceledError, Post } from '../services/Post-service';

const usePosts = () => {
       const [posts, setPosts] = useState<Post[]>([]);
        const [error, setError] = useState<string | null>(null);
        const [isLoading, setIsLoading] = useState<boolean>(false);
    
        useEffect(() => {
            console.log('useEffect');
            setIsLoading(true);
            const {request,cancel} = postService.getAllPosts()
            request.then((response) => {
                setPosts(response.data);
                setIsLoading(false);
            })
            request.catch((error) => {
                if (error instanceof CanceledError) return;
                console.log(error);
                    setError(error.message);
                    setIsLoading(false);
                })
            return cancel;        
        }, []);
        return {posts,setPosts, error, setError, isLoading, setIsLoading}
}

export default usePosts;