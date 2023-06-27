import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  wrap: wrap;

  h4 {
    margin: 0px;
    padding: 0px;
  }
`;

export const ListTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
  flex-wrap: wrap;
`;
