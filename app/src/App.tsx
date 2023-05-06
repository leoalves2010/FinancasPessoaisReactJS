import React from "react";
import * as C from "./App.styles";
import { CategoryType } from "./types/CategoryType";
import { ItemType } from "./types/ItemType";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";

const App = () => {
    const [listItems, setListItems] = React.useState(items);
    const [filteredList, setFilteredList] = React.useState<ItemType[]>([]);
    const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth);

    React.useEffect(() => {
        setFilteredList(filterListByMonth(listItems, currentMonth));
    }, [listItems, currentMonth]);

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth);
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
                ></InfoArea>
                <TableArea listItems={filteredList} />
            </C.Body>
        </C.Container>
    );
};

export default App;
