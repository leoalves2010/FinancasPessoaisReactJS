import { ItemType } from "../types/ItemType";

export const items: ItemType[] = [
    {
        id: Math.floor(Math.random() * 999999999999 + Date.now()),
        date: new Date(2023, 5, 6),
        category: "food",
        title: "McDonalds",
        value: 32.12,
    },
    {
        id: Math.floor(Math.random() * 999999999999 + Date.now()),
        date: new Date(2023, 5, 15),
        category: "food",
        title: "Burger King",
        value: 57.65,
    },
    {
        id: Math.floor(Math.random() * 999999999999 + Date.now()),
        date: new Date(2023, 5, 16),
        category: "rent",
        title: "Aluguel Apto",
        value: 2300,
    },
    {
        id: Math.floor(Math.random() * 999999999999 + Date.now()),
        date: new Date(2023, 4, 18),
        category: "salary",
        title: "Salário ACME",
        value: 4569,
    },
];
