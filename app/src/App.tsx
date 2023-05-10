import React from "react";
import * as C from "./App.styles";
import { CategoryType } from "./types/CategoryType";
import { ItemType } from "./types/ItemType";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";
import InputArea from "./components/InputArea";

const App = () => {
    const [listItems, setListItems] = React.useState(items);
    const [filteredList, setFilteredList] = React.useState<ItemType[]>([]);
    const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth);
    const [income, setIncome] = React.useState(0);
    const [expense, setExpense] = React.useState(0);

    React.useEffect(() => {
        setFilteredList(filterListByMonth(listItems, currentMonth));
    }, [listItems, currentMonth]);

    React.useEffect(() => {
        let incomeSum = 0;
        let expenseSum = 0;

        for (const i in filteredList) {
            if (categories[filteredList[i].category].expense) {
                expenseSum += filteredList[i].value;
            } else {
                incomeSum += filteredList[i].value;
            }
        }

        setIncome(incomeSum);
        setExpense(expenseSum);
    }, [filteredList]);

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth);
    };

    const handleAdd = (item: ItemType) => {
        const newListItems = [...listItems];
        newListItems.push(item);
        setListItems(newListItems);
    };

    return (
        <C.Container>
            <C.Header>
                <C.HeaderText>Sistema Financeiro</C.HeaderText>
            </C.Header>
            <C.Body>
                <InfoArea
                    currentMonth={currentMonth}
                    onMonthChange={handleMonthChange}
                    income={income}
                    expense={expense}
                ></InfoArea>
                <InputArea onAdd={handleAdd} />
                <TableArea filteredList={filteredList} setListItems={setListItems} generalList={listItems} />
            </C.Body>
        </C.Container>
    );
};

export default App;
