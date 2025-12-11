import { useEffect, useState } from 'react';
import Routes from './routes/index';

import "./styles/index.scss";
import { useDispatch } from 'react-redux';
import { AppDistach } from './types/dispatch.type';
import { getUser } from './actions/user.action';
import axios from 'axios';
import { ToastContextProvider } from './components/toast/ToastContext';

function App() {
  
  const dispatch:AppDistach = useDispatch();
  const [UID, setUID] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
        await axios({
          method:"GET",
          withCredentials: true,
          url: `/api/jwtid`
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }).then((res:any) => {
          setUID(res.data);
        })
    }
    fetchToken();

    if (UID)
    {
      dispatch(getUser(UID));
    }
  }, [UID, dispatch]);

  return (
   <>
    <ToastContextProvider>
      <div className="container">
        <Routes />
      </div>
    </ToastContextProvider>
   </>
  )
}

export default App
