import React, { useEffect, useState } from 'react';
import FewCard from '../FewCards/FewCard';
import useData from '../MainData/MainData';
import './Featured.css';

const Featured = () => {
    const [infos, setInfo] = useData();
    const newInfos = infos.slice(0, 4);
    return (
        <div>
            <div>
                <h1>Our Top Courses</h1>
                <hr />
            </div>
            <div className='container items-list'>
                {
                    newInfos.map(info =>
                        <FewCard
                            key={info.id}
                            info={info}></FewCard>
                    )
                }
            </div>
        </div>
    );
};

export default Featured;