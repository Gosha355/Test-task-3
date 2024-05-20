import React, { useEffect } from 'react';
import styles from './MainPage.module.css'
import Row from '../Row/Row';
import { observer } from "mobx-react-lite";
import AddButtonParent from '../Button/AddButtonParent';
import todoStore from '../../store/TodoStore';

const SECTION_NAMES = ['Уровень', 'Наименование работ', 'Основная з/п', 'Оборудование', 'Накладные расходы', 'Сметная прибыль']

const title = 'Строительно монтажные работы'

 export interface ApiArticleData {
    id: number;
    rowName: string;
    total: number;
    salary: number;
    mimExploitation: number;
    machineOperatorSalary: number;
    mainCosts: number;
    supportCosts: number;
    equipmentCosts: number;
    overheads: number;
    estimatedProfit: number;
    child: ApiArticleData[];
}

const MainPage = () => {

    const getApiData = async () => {
        const response: ApiArticleData[] = await fetch(
            "http://185.244.172.108:8081/v1/outlay-rows/entity/124649/row/list"
        ).then((response) => response.json());
        todoStore.data = response        
    }
    useEffect(() => {
        getApiData();
    }, [])

    const createChildRow = (article: ApiArticleData, parentId: number) => {
        let articlesChild = Object.assign([], todoStore.data)
        const formatedArticles = articlesChild.map((currentArticle: ApiArticleData) => {
            if (parentId === currentArticle.id) {
                if (currentArticle.child != undefined) { 
                    currentArticle.child.push(article)
                } else {
                    getApiData()
                }
            }
            return currentArticle
        })
        todoStore.data = formatedArticles
    }

    const createParentRow = (article: ApiArticleData) => {
        const articlesParent = [...todoStore.data]
        articlesParent.push(article)
        todoStore.data = articlesParent
    }

    const removeRow = (rowId: number) => {
        const newArticles = todoStore.data.filter(({ id }) => {
            if (id === rowId) {
                return false
            } else {
                return true
            }
        })

        const result = newArticles.map((newArticle) => {
            if (newArticle.child != undefined) {
                const articleData = newArticle.child.filter((newArticleChild) => {
                    if (newArticleChild.id === rowId) {
                        return false
                    } else {
                        return true
                    }
                })
                return { ...newArticle, child: articleData }
            } else {
                return { ...newArticle }
            }
        })
        todoStore.data = result
    }

    const renderRow = (articleData: ApiArticleData) => {
        const childRows = articleData.child ? articleData.child.map((childArticleData: ApiArticleData) => {
            return <Row article={childArticleData} callBack={removeRow} createChild={createChildRow} isChild={true} />
        }) : []
        const parentRow = () => <Row article={articleData} callBack={removeRow} createChild={createChildRow} />;
        return <>{parentRow()}{[...childRows]}</>;
    }


    return (
        <div className={styles.main_page}>
            <div className={styles.main_page__title}>
                <h1 className={styles.main_page__caption}>{title}</h1>
                <div><AddButtonParent createParent={createParentRow} /></div>
            </div>

            <table className={styles.main_page__table}>
                <thead className={styles.main_page__head}>
                    <tr>
                        {SECTION_NAMES.map((name) => {
                            return <th>{name}</th>
                        })}
                    </tr>
                </thead>
                <tbody className={styles.main_page__name}>
                    {todoStore.data.map((article: ApiArticleData) => {
                        return renderRow(article)
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default observer(MainPage);
