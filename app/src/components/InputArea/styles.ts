import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

export const Message = styled.div`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid transparent;
    border-radius: 5px;

    &::before {
        content: "⚠";
        margin-right: 5px;
    }
`;

export const InputArea = styled.div`
    display: flex;
    align-items: flex-end;

    label {
        font-weight: bold;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    button {
        background-color: rgb(174, 215, 229);
        color: #000;
        border-radius: 5px;
        border: none;
        flex: 1;
        height: 40px;
        cursor: pointer;
        transition: all 0.2s linear;

        &:hover {
            opacity: 0.75;
        }
    }

    input,
    select {
        outline: none;
        height: 40px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 10px;
        margin-top: 5px;
    }
`;
