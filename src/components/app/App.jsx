import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import style from '../app/app.module.scss';

function App() {
  return (
    <div className={style.container}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
