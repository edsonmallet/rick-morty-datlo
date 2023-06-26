import styles from "styled-components";

export const Container = styles.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 16px;
    background-color: #eee;
`;

export const ListAlphabetic = styles.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 16px;
    list-style: none;
`;
