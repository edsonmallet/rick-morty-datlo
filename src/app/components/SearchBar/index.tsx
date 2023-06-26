import React from "react";

interface SearchProps {
  setSearch: (search: string) => void;
  updatePageNumber: (pageNumber: number) => void;
}

export const SearchBar: React.FC<SearchProps> = ({
  setSearch,
  updatePageNumber,
}) => {
  return (
    <form>
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Busque por nome, descrição ou tags"
        type="text"
      />
    </form>
  );
};
