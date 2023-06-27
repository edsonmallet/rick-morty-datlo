export interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface Episode extends ResourceBase {
  air_date: string;
  episode: string;
  characters: string[];
}
interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Character {
  id: number;
  name: string;
  status: "Dead" | "Alive" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Episode[];
  url: string;
  created: string;
}

export interface CharacterResponse {
  info: Info;
  results: Character[];
}
