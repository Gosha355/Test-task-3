import './App.css';
import styles from './components/MainPage/MainPage.module.css';
import Header from './components/Header/Header';
import ProjectName from './components/ProjectName/ProjectNamesBlock';
import MainPage from './components/MainPage/MainPage';

const App = () => {
  return (
    <div>
      <Header/>
      <div className={styles.container}>
      <ProjectName/>
      <MainPage/>
      </div>
    </div>
  )
}

export default App;
