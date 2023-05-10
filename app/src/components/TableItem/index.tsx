import { ItemType } from "../../types/ItemType";
import * as C from "./styles";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";

type Props = {
    item: ItemType;
    setListItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
    generalList: ItemType[];
};

const TableItem = ({ item, setListItems, generalList }: Props) => {
    const handleClickRemove = (id: number) => {
        const copyListItems = [...generalList];
        const newListItems = copyListItems.filter((x) => x.id !== id);
        setListItems(newListItems);
    };

    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category bgColor={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value
                    color={categories[item.category].expense ? "red" : "green"}
                >
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
            <C.TableColumn>
                <C.Button onClick={() => handleClickRemove(item.id)}>
                    Remover
                </C.Button>
            </C.TableColumn>
        </C.TableLine>
    );
};

export default TableItem;
