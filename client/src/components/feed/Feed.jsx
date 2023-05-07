import './feed.css'
import Post from '../post/Post'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Skeleton from '../skeleton/Skeleton';

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {           // How to fetch?
    const getVideos = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get("/api/videos/1")
        setVideos(res.data)
      } catch (error) { }
      setIsLoading(false)
    };
    getVideos();
  }, []); //dependency empty array

  

  return (
    <div className='feed'>
      { isLoading ? (
        <Skeleton type="circle" />
      ) : (
        videos.map((video) => <Post video={video} />)
      )}
    </div>
  )
}

export default Feed
