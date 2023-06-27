import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-self: flex-start;
`;

export const TagList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const EpisodeList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`;

export const EpisodeItem = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  background-color: #eee;
  padding: 10px;
  border-radius: 8px;

  p {
    display: flex;
    flex: 1;
    margin: 0;
    padding: 0;
  }
`;
