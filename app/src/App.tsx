import * as C from "./App.styles";
import { CategoryType } from "./types/CategoryType";
import { ItemType } from "./types/ItemType";
import { categories } from "./data/categories";
import { items } from "./data/items";

const App = () => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderText>Sistema Financeiro</C.HeaderText>
            </C.Header>
            <C.Body>...</C.Body>
        </C.Container>
    );
};

export default App;
