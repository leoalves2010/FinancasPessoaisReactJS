import { ItemType } from "../../types/ItemType";
import * as C from "./styles";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";

type Props = {
    item: ItemType;
};

const TableItem = ({ item }: Props) => {
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
        </C.TableLine>
    );
};

export default TableItem;
