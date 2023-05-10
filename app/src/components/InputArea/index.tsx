import React from "react";
import * as C from "./styles";
import { categories } from "../../data/categories";
import { ItemType } from "../../types/ItemType";

type Props = {
    onAdd: (item: ItemType) => void;
};

const InputArea = ({ onAdd }: Props) => {
    const [categoriesList, setCategoriesList] = React.useState(categories);
    const [date, setDate] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState("");

    const handleClick = () => {
        if (date !== "" && category !== "" && title !== "" && value !== "") {
            const currentDate = new Date(date);
            currentDate.setMonth(currentDate.getMonth() + 1);
            currentDate.setDate(currentDate.getDate() + 1);

            const newAdd: ItemType = {
                id: Math.floor(Math.random() * 999999999999 + Date.now()),
                date: currentDate,
                category,
                title,
                value: parseFloat(value),
            };
            onAdd(newAdd);
        } else {
            setError("Todos os campos devem ser preenchidos.");
        }
    };

    return (
        <C.Container>
            {error && <C.Message>{error}</C.Message>}
            <C.InputArea>
                <label>
                    Data
                    <input
                        type="date"
                        onChange={({ target }) => setDate(target.value)}
                    />
                </label>

                <label>
                    Categoria
                    <select
                        value={category}
                        onChange={({ target }) => setCategory(target.value)}
                    >
                        <option value=""></option>
                        {Object.keys(categoriesList).map((key, index) => (
                            <option value={key} key={index}>
                                {categoriesList[key].title}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Título
                    <input
                        type="text"
                        value={title}
                        onChange={({ target }) => setTitle(target.value)}
                        required
                    />
                </label>

                <label>
                    Valor
                    <input
                        type="number"
                        value={value}
                        onChange={({ target }) => setValue(target.value)}
                        step={0.1}
                        required
                    />
                </label>

                <button onClick={handleClick}>Adicionar</button>
            </C.InputArea>
        </C.Container>
    );
};

export default InputArea;
