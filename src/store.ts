import { create } from "zustand";

// define shape of the game query (filters for displaying games)
interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

// defines structure of zustand store, includes state and actions
interface GameQueryStore {
  gameQuery: GameQuery;
  // functions to update each part of gameQuery
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  // replace entire gameQuery with only the searchText
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  // update genreId while keeping other filters
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  // update platformId while keeping other filters
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  // update sortOrder while keeping other filters
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
