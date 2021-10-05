import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import useData from '../MainData/MainData';
import './Info.css';

const Info = () => {
    const [infos, setInfo] = useData();
    /* const [infos, setInfo] = useState([]);
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, []) */
    return (
        <div >
            <div className='container item-list'>
                {
                    infos.map(info =>
                        <Cards
                            key={info.id}
                            info={info}
                        ></Cards>)
                }
            </div>
        </div>
    );
};

export default Info;