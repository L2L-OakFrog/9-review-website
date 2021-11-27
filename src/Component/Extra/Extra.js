import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useData from '../MainData/MainData';

const Extra = () => {
    const [sed, setSed] = useState([]);
    const [infos, setInfo] = useData();
    const { extraId, s } = useParams();

    console.log(sed);

    /* const [video, setVideo] = useState(null);
    useEffect(() => {
        fetch("./fakedata.JSON")
            .then((res) => res.json())
            .then((videos) => videos.filter((video) => {
                return video.id === extraId;
            }))
            .then((matched) => setVideo(matched[0]));
    }, []); */
    console.log(infos);
    useEffect(() => {
        const single = infos.find(info => info.key === extraId);
        setSed(single);
    }, [infos])

    const co = useParams();
    console.log(co);

    const styles =
    {
        textDecoration: 'none',
        fontWeight: "bold",
        color: "white",
    }
    return (
        <div className=''>
            <div>
                <h1>Ready to Checkout?</h1>
                <p>{s}</p>
            </div>
            <div className='container'>
                <div>
                    <Button className='confirm' variant="primary"><NavLink style={styles} to='/extras'>Yes</NavLink></Button>{' '}
                    <Button className='confirm' variant="primary"><NavLink style={styles} to='/services'>No</NavLink></Button>{' '}
                </div>
                <div className=''>

                </div>
            </div>
        </div>
    );
};

export default Extra;