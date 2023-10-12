import React, { useState, useEffect } from 'react';

function Album() {
    const [albumData, setAlbumData] = useState([]);
    const [error, setError] = useState('');
    const [selectedAlbum, setSelectedAlbum] = useState(null);

    const fetchAlbumData = () => {
        fetch('https://jsonplaceholder.typicode.com/users/1/albums')
            .then((response) => response.json())
            .then((data) => {
                setAlbumData(data);
            })
            .catch((error) => {
                setError('An error occurred while fetching album data.');
            });
    };

    useEffect(() => {
        fetchAlbumData();
    }, []);

    const showAlbumDetails = (album) => {
        setSelectedAlbum(album);
    };

    const closeAlbumDetails = () => {
        setSelectedAlbum(null);
    };

    return (
        <div className="bg-white-300 p-4">
            {error && <p className="text-red-600">{error}</p>}
            <ul className="mt-4">
                {albumData.map((album) => (
                    <li key={album.id} >
                        <p className="text-lg font-semibold">ID: {album.id}</p>
                        <button
                            className="text-white bg-blue-300 p-0.5 m-0.5 rounded cursor-pointer"
                            onClick={() => showAlbumDetails(album)}
                        >
                            Show Details
                        </button>
                        {selectedAlbum && selectedAlbum.id === album.id && (
                            <div>
                                <p className="text-lg font-semibold">Id: {selectedAlbum.id}</p>
                                <p className="text-base text-green-600">Title: {selectedAlbum.title}</p>
                                
                                <button
                                    className="text-white bg-yellow-300 rounded p-1 m-1 cursor-pointer"
                                    onClick={closeAlbumDetails}
                                >
                                    Close Details
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Album;