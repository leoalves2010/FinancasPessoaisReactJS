import { ItemType } from "../../types/ItemType";
import TableItem from "../TableItem";
import * as C from "./styles";

type Props = {
    filteredList: ItemType[];
    setListItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
    generalList: ItemType[];
};

const TableArea = ({ filteredList, setListItems, generalList }: Props) => {
    if (filteredList.length === 0)
        return <C.NotFound>Sem registro no mês selecionado</C.NotFound>;

    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Remover</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {filteredList.map((item, index) => (
                    <TableItem
                        item={item}
                        key={index}
                        setListItems={setListItems}
                        generalList={generalList}
                    />
                ))}
            </tbody>
        </C.Table>
    );
};

export default TableArea;
