import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
    margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${(props) => (props.width ? `${props.width}px` : "auto")};
    padding: 10px 0;
    text-align: left;
`;

export const NotFound = styled.div`
    width: inherit;
    margin: 30px 200px;
    padding: 15px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    background-color: rgb(232, 184, 185);
    border-radius: 40px;
    border: 2px dashed rgb(247, 79, 87);
`;
