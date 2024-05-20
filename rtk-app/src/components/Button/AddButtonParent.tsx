import styles from '../MainPage/MainPage.module.css'
import { ApiArticleData } from '../MainPage/MainPage';


interface AddButtonParentProps {
  createParent: (article: ApiArticleData) => void;
}


const AddButtonParent = (props:AddButtonParentProps) => {
  const addRow = async () => {
    const articleForm = {
      "equipmentCosts": 0,
      "estimatedProfit": 0,
      "machineOperatorSalary": 0,
      "mainCosts": 0,
      "materials": 0,
      "mimExploitation": 0,
      "overheads": 0,
      "rowName": 'string',
      "salary": 0,
      "supportCosts": 0,
    }

  const response = await fetch(
    `http://185.244.172.108:8081/v1/outlay-rows/entity/124649/row/create`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(articleForm)
    }).then((response) => response.json());
    props.createParent(response['current']);     
  }

  return (
    <button className={styles.main_page__button_parent} onClick={() => addRow()}>
        Создать сторку
    </button>
  );
};

export default AddButtonParent;