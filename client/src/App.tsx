import './Style/index.scss'
import Routes from "./Routes";
import { getCookie } from './Utils';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWorks } from './actions/works.action';
import { getTechs } from './actions/tech.action';
import { getStudies } from './actions/study.action';

function App() {

  const dispatch:any = useDispatch();

  const [theme, setTheme] = useState(getCookie('theme'));

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
  }, [])

  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
