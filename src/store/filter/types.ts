export interface SortType {
    name: string;
    sortProperty: string;
    order: string;
}

export interface FilterState {
    searchValue: string;
    categoryID: number;
    sortNameObj: SortType;
    currentPage: number
}
