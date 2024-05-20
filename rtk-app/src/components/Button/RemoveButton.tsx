import DeleteIcon from '../../Icons/Icon_delete';
import styles from '../MainPage/MainPage.module.css'



interface RemoveProps {
    rowId: number;
    callBack: (rowId: number) => void;
}

const RemoveButton = (props: RemoveProps) => {
    const deleteRow = async () => {
        const response = await fetch(
            `http://185.244.172.108:8081/v1/outlay-rows/entity/124649/row/${props.rowId}/delete`,
            {
                method: 'DELETE'
            }
        )
        const statusCode = response.status;
        if (statusCode === 200) {
            props.callBack(props.rowId)
        }

    }
    return (
        <a className={styles.main_page__button_delete} onClick={() => deleteRow()}>
            <DeleteIcon/>
        </a >
    );
};

export default RemoveButton;