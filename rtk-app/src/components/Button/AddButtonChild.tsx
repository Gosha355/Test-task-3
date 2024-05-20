import RowIcon from '../../Icons/Icon_row';
import styles from '../MainPage/MainPage.module.css'
import { ApiArticleData } from '../MainPage/MainPage';

interface AddButtonProps {
  rowId: number;
  article: ApiArticleData;
  createChild: (article: ApiArticleData, parentId: number) => void;
  isChild?:boolean;
}

const AddButtonChild = (props: AddButtonProps) => {

  const addRow = async (parentId?: number) => {
    const articleForm = {
      "equipmentCosts": 0,
      "estimatedProfit": 0,
      "machineOperatorSalary": 0,
      "mainCosts": 0,
      "materials": 0,
      "mimExploitation": 0,
      "overheads": 0,
      "parentId": parentId || 'null',
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
    props.createChild(response['current'], props.rowId);
  }

  return (
    <div className={props.isChild ? styles.child_page__none : styles.main_page__button_add} onClick={() => addRow(props.rowId)}>
      <RowIcon />
    </div>
  );
};

export default AddButtonChild;