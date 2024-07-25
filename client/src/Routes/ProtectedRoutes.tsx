import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UIdContext } from '../App.context';
import { isEmpty } from '../Utils/IsEmpty';

const ProtectedRoute = ({children} : {children:JSX.Element}) => {

    const [load, setLoad] = useState(false);

    const UId = useContext(UIdContext);
    let location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            setLoad(true)
        }, 100)
    }, [UId])

    if (isEmpty(UId) && load)
    {
        return <Navigate to="/" state={{from: location}} replace />
    }
    
    return children;
}

export default ProtectedRoute;