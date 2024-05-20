import React, { useCallback, useRef, useState } from 'react';
import useDoubleClick from 'use-double-click';
import RemoveButton from '../Button/RemoveButton';
import styles from '../MainPage/MainPage.module.css'
import { useDetectClickOutside } from 'react-detect-click-outside';
import AddButtonChild from '../Button/AddButtonChild';
import { ApiArticleData } from '../MainPage/MainPage';

interface RowProps {
  article: ApiArticleData;
  callBack: (rowId: number) => void;
  createChild: (article: ApiArticleData, parentId: number) => void;
  isChild?:boolean;
}
const Row = (props: RowProps) => {

  const TD_NAMES = [
    'rowName',
    'salary',
    'equipmentCosts',
    'overheads',
    'total'
  ]

  const rowRef = React.useRef(null)
  const [isRowEditable, setIsRowEditable] = useState(false);
  const closeDropdown = () => {
    setIsRowEditable(false);
  }
  const outsideClick = useDetectClickOutside({ onTriggered: closeDropdown });
  useDoubleClick({
    onSingleClick: (e: React.MouseEvent) => {
    },
    onDoubleClick: (e: React.MouseEvent) => {
      setIsRowEditable(true)
    },
    ref: rowRef,
    latency: 250

  });

  const ref = useCallback((element: any) => {
    rowRef.current = element
    outsideClick.current = element
  }, [rowRef, outsideClick])


  let isAutofocus = true


  const fetchEditRow = async (e: React.KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>, rowName: string) => {
    const newRowData = props.article;
    newRowData[rowName] = e.currentTarget.value
    const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/124649/row/${props.article.id}/update`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRowData)

      })
  }
  return (
    <tr ref={ref} className={styles.main_page__line}>
      <td>
        <div className={props.isChild ? styles.child_page__top : styles.main_page__buttons}>
          <div className={props.isChild ? styles.child_page__left : styles.main_page__buttons}>
            <div className={props.isChild ? styles.child_page__line : styles.main_page__buttons}>
              <td><AddButtonChild article={props.article} createChild={props.createChild} rowId={props.article.id} isChild={props.isChild} /></td>
              <td><RemoveButton rowId={props.article.id} callBack={props.callBack} /></td>
            </div>
          </div>
        </div>
      </td>

      {
        TD_NAMES.map((tdName: string) => {
          return <td>{isRowEditable ? 
            <input autoFocus={isAutofocus} onChange={() => isAutofocus = false} onBlur={(e) => fetchEditRow(e, tdName)} defaultValue={props.article[tdName]} onKeyDown={(e) => {
              if (e.key === 'Enter') {
                isAutofocus = true
                fetchEditRow(e, tdName)
                setIsRowEditable(false)
              }
            }} />
            : props.article[tdName]}
            </td>
        })
      }
    </tr>
  );

};

export default Row;