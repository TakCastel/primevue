import { VNode } from 'vue';

interface DataTableProps {
    value?: any[];
    dataKey?: string;
    rows?: number;
    first?: number;
    totalRecords?: number;
    paginator?: boolean;
    paginatorPosition?: string;
    alwaysShowPaginator?: boolean;
    paginatorTemplate?: string;
    pageLinkSize?: number;
    rowsPerPageOptions?: number[];
    currentPageReportTemplate?: string;
    lazy?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    sortField?: string | ((item: any) => any);
    sortOrder?: number;
    defaultSortOrder?: number;
    multiSortMeta?: any[];
    sortMode?: string;
    removableSort?: boolean;
    filters?: {
        [s: string]: any;
    };
    filterDisplay?: string;
    globalFilterFields?: any[];
    filterLocale?: string;
    selection?: any[] | any;
    selectionMode?: string;
    compareSelectionBy?: string;
    metaKeySelection?: boolean;
    contextMenu?: boolean;
    contextMenuSelection?: any;
    rowHover?: boolean;
    csvSeparator?: string;
    exportFilename?: string;
    autoLayout?: boolean;
    resizableColumns?: boolean;
    columnResizeMode?: string;
    reorderableColumns?: boolean;
    expandedRows?: any[];
    expandedRowIcon?: string;
    collapsedRowIcon?: string;
    rowGroupMode?: string;
    groupRowsBy?: string[] | string;
    expandableRowGroups?: boolean;
    expandedRowGroups?: any[];
    stateStorage?: string;
    stateKey?: string;
    editMode?: string;
    editingRows?: any[];
    rowClass?: any;
    scrollable?: boolean;
    scrollHeight?: string;
    scrollDirection?: string;
    frozenValue?: any[];
    responsiveLayout?: string;
    breakpoing?: string;
    showGridlines?: boolean;
    stripedRows?: boolean;
    tableStyle?: object;
    tableClass?: string;
}

interface DataTableHeaderSlotInterface {
    column: any;
}

interface DataTableFooterSlotInterface {
    column: any;
}

interface DataTableGroupHeaderSlotInterface {
    data: any;
    index: number;
}

interface DataTableGroupFooterSlotInterface {
    data: any;
    index: number;
}

interface DataTableExpansionSlotInterface {
    data: any;
    index: number;
}

declare class DataTable {
    $props: DataTableProps;

    $emit(eventName: 'update:first', value: number): this;
    $emit(eventName: 'update:rows', value: number): this;
    $emit(eventName: 'update:sortField', value: string | ((item: any) => any)): this;
    $emit(eventName: 'update:sortOrder', value: number): this;
    $emit(eventName: 'update:multiSortMeta', value: any[]): this;
    $emit(eventName: 'update:selection', value: any[] | any): this;
    $emit(eventName: 'update:contextMenuSelection', value: boolean): this;
    $emit(eventName: 'update:expandedRows', value: any[]): this;
    $emit(eventName: 'update:expandedRowGroups', value: any[]): this;
    $emit(eventName: 'update:filters', value: any): this;
    $emit(eventName: 'update:editingRows', value: any[]): this;
    $emit(eventName: 'page', event: Event): this;
    $emit(eventName: 'sort', event: Event): this;
    $emit(eventName: 'filter', event: Event): this;
    $emit(eventName: 'value-change', value: any[]): this;
    $emit(eventName: 'row-click', event: Event): this;
    $emit(eventName: 'row-dblclick', event: Event): this;
    $emit(eventName: 'row-contextmenu', event: Event): this;
    $emit(eventName: 'row-select', event: {originalEvent: Event, data: any, index: number, type: string}): this;
    $emit(eventName: 'row-select-all', event: {originalEvent: Event, data: any}): this;
    $emit(eventName: 'row-unselect-all', event: {originalEvent: Event}): this;
    $emit(eventName: 'row-unselect', event: {originalEvent: Event, data: any, index: number, type: string}): this;
    $emit(eventName: 'column-resize-end', event: {originalEvent: Event, delta: any}): this;
    $emit(eventName: 'column-reorder', event: {originalEvent: Event, dragIndex: number, dropIndex: number}): this;
    $emit(eventName: 'row-reorder', event: {originalEvent: Event, dragIndex: number, dropIndex: number, value: any[]}): this;
    $emit(eventName: 'row-expand', event: Event): this;
    $emit(eventName: 'row-collapse', event: Event): this;
    $emit(eventName: 'rowgroup-expand', event: {originalEvent: Event, data: any[]}): this;
    $emit(eventName: 'rowgroup-collapse', event: {originalEvent: Event, data: any[]}): this;
    $emit(eventName: 'cell-edit-init', event: Event): this;
    $emit(eventName: 'cell-edit-complete', event: Event): this;
    $emit(eventName: 'cell-edit-cancel', event: Event): this;
    $emit(eventName: 'row-edit-init', event: Event): this;
    $emit(eventName: 'row-edit-save', event: Event): this;
    $emit(eventName: 'row-edit-cancel', event: Event): this;
    $emit(eventName: 'state-restore', value: any[]): this;
    $emit(eventName: 'state-save', value: any[]): this;

    exportCSV(options?: any): void;

    $slots: {
        header: DataTableHeaderSlotInterface;
        footer: DataTableFooterSlotInterface;
        paginatorLeft: VNode[];
        paginatorRight: VNode[];
        empty: VNode[];
        groupheader: DataTableGroupHeaderSlotInterface;
        groupfooter: DataTableGroupFooterSlotInterface;
        loading: VNode[];
        expansion: DataTableExpansionSlotInterface;
    };
}

export default DataTable;
