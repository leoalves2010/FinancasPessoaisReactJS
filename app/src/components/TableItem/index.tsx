import { ItemType } from "../../types/ItemType";
import * as C from "./styles";

type Props = {
    item: ItemType;
};

const TableItem = ({ item }: Props) => {
    return <C.TableLine></C.TableLine>;
};

export default TableItem;
