import { useEffect, useState } from "react";

const useData = () => {
    const [infos, setInfo] = useState([]);
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    return [infos, setInfo];
}
export default useData;