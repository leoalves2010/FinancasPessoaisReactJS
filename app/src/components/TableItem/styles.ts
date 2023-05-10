import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{ bgColor: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background-color: ${(props) => props.bgColor};
`;

export const Value = styled.div<{ color: string }>`
    color: ${(props) => props.color};
`;

export const Button = styled.button`
    background-color: rgb(232, 184, 185);
    color: #000;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s linear;

    &::before {
        content: "🗑";
        font-size: 15px;
        margin-right: 5px;
    }

    &:hover {
        opacity: 0.75;
    }
`;
