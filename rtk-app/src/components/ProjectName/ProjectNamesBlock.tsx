import React from 'react';
import styles from './ProjectName.module.css'
import KeyboardArrowIcon from '../../Icons/Keyboard_arrow_down';
import NavbuttonIcon from '../../Icons/Navbutton_icon';

const PROJECT_NAMES = ['По проекту', 'Объекты', 'РД', 'МТО', 'СМР', 'График', 'МиМ', 'Рабочие', 'Капвложения', 'Бюджет', 'Финансирование', 'Панорамы', 'Камеры', 'Поручения', 'Контрагенты']

const headingName = ['Название проекта', 'Аббревиатура']

const ProjectNamesBlock = () => {
  return (
    <div className={styles.project_name}>
      <div className={styles.project_name__choice}>
        <p className={styles.project_name__full}>{headingName[0]}<KeyboardArrowIcon styles={{ marginLeft: '50px', marginTop: '10px' }} /></p>
        <p className={styles.project_name__abbreviation}>{headingName[1]}</p>
      </div>
      <div className={styles.project_name__list}>
        <ul className={styles.project_name__part}>
          {PROJECT_NAMES.map((name) => {
            return <li className={styles.project_name__item}><NavbuttonIcon styles={{ marginRight: '14px' }} />{name}</li>
          })}
        </ul>
      </div>
    </div>

  )
}

export default ProjectNamesBlock;
