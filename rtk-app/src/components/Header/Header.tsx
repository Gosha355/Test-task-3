import styles from './Header.module.css'
import CubeIcon from '../../Icons/Icon_cube';
import ArrowIcon from '../../Icons/Icon_arrow';

 

const Header = () => {
  return (
    <div className={styles.header}>
      <CubeIcon styles={{marginRight: '20px'}}/> 
      <ArrowIcon styles={{marginRight: '20px'}}/>
      <ul className={styles.header_wrapp}>
        <li className={styles.header_wrapp__viewing}>Просмотр</li>
        <li>Управление</li>
      </ul>
    </div>
  )
}

export default Header;
