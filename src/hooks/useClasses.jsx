import  { useEffect, useState } from 'react';

const useClasses = () => {
    const [activities, setActivities] =useState([])
    const [loading, setLoading]=useState(true)
    useEffect(()=>{
        fetch('https://summer-camp-server-alpha-jet.vercel.app/class')
        .then(res=>res.json())
        .then(data=>{
            setActivities(data)
           setLoading(false)
        })
    },[])

    return[activities, loading]
};

export default useClasses;