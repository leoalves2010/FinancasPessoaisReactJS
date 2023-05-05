import { ItemType } from "../../types/ItemType";
import TableItem from "../TableItem";
import * as C from "./styles";

type Props = {
    listItems: ItemType[];
};

const TableArea = ({ listItems }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {listItems.map((item, index) => (
                    <TableItem item={item} key={index} />
                ))}
            </tbody>
        </C.Table>
    );
};

export default TableArea;
