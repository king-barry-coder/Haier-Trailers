import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, HEADERS } from '../../app';
import './moviedetails.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await fetch(`${BASE_URL}/movie/${id}`, { headers: HEADERS });
        const data = await res.json();
        setMovie(data);

        const vidRes = await fetch(`${BASE_URL}/movie/${id}/videos`, { headers: HEADERS });
        const vidData = await vidRes.json();
        const trailer = vidData.results.find(v => v.type === 'Trailer');
        console.log("trailer", trailer);
        setVideo(trailer);

        const watched = JSON.parse(localStorage.getItem('recentlyWatched')) || [];
        const updated = [data, ...watched.filter(m => m.id !== data.id)].slice(0, 10);
        localStorage.setItem('recentlyWatched', JSON.stringify(updated));
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
      }
    };
    getDetails();
  }, [id]);

  if (!movie) return <p>Loading movie details...</p>;

  return (
    <div>
        <div className="video">
            {video ? (
            <>
                {isVideoLoading && <p>Loading trailer...</p>}
                <iframe
                width="600"
                height="400"
                src={`https://www.youtube.com/embed/${video.key}`}
                title="YouTube trailer"
                frameBorder="0"
                allowFullScreen
                onLoad={() => setIsVideoLoading(false)}
                style={{ display: isVideoLoading ? 'none' : 'block' }}
                ></iframe>
            </>
            ) : (
            <p className='no'>No trailer available.</p>
            )}
        </div>

        <div className="detail-box">
            <h1 className='title'>{movie.title}</h1>
            <p className='overview'>{movie.overview}</p>
            <p className='ratings'>
                ⭐ {movie.vote_average?.toFixed(1)} / 10 
            </p>
             
        </div>
      
      
    </div>
  );
};

export default MovieDetail;








