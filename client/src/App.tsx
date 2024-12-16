import './Style/index.scss'
import Routes from "./Routes";
import { getCookie } from './Utils';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWorks } from './actions/works.action';
import { getTechs } from './actions/tech.action';
import { getStudies } from './actions/study.action';
import { UIdContext } from './App.context';
import axios from 'axios';
import { getUser } from './actions/user.action';
import { getAnnounce } from './actions/announce.action';

function App() {

  const dispatch:any = useDispatch();

  const [theme, setTheme] = useState(getCookie('theme'));
  const [UId, setUId] = useState(null);

  function isCustomEvent(event: Event): event is CustomEvent {
    return 'detail' in event;
  }

  useEffect(() =>{
    document.addEventListener('theme', function (e: Event) {
      if (!isCustomEvent(e))
        throw new Error('not a custom event');
      setTheme(e.detail);
    })
  }, []);

  useEffect(() => {
    dispatch(getWorks());
    dispatch(getTechs());
    dispatch(getStudies());
    dispatch(getAnnounce());
  }, []);

  useEffect(() => {
    const fetchToken = async () => {
        await axios({
          method:"GET",
          withCredentials: true,
          url: `${process.env.REACT_APP_API_URL}/jwtid`
        }).then((res) => {
          setUId(res.data);
        })
    }
    fetchToken();

    if (UId)
    {
      dispatch(getUser(UId));
    }
  }, [UId, dispatch]);

  return (
    <UIdContext.Provider value={UId}>
      <div className="App" data-theme={theme}>
        <div className="container">
          <Routes />
        </div>
      </div>
    </UIdContext.Provider>
  );
}

export default App;
