import { ItemType } from "../types/ItemType";

export const getCurrentMonth = () => {
    const dateToday = new Date();
    return `${dateToday.getFullYear()}-${dateToday.getMonth() + 1}`;
};

export const filterListByMonth = (
    listItems: ItemType[],
    date: string
): ItemType[] => {
    const newList: ItemType[] = [];
    const [year, month] = date.split("-");

    for (const i in listItems) {
        if (
            listItems[i].date.getFullYear() === parseInt(year) &&
            listItems[i].date.getMonth() === parseInt(month)
        ) {
            newList.push(listItems[i]);
        }
    }

    return newList;
};

export const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.getMonth().toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
};
