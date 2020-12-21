import React from "react";
import {ColDef, DataGrid, RowsProp} from "@material-ui/data-grid";

export interface GeneralDataTableProps {
    isLoading: boolean
    rows: RowsProp
    columns: ColDef[]
}

export default function GeneralDataTable(props: GeneralDataTableProps) {
    return (
        <DataGrid rows={props.rows}
                  columns={props.columns}
                  pageSize={10}
                  rowsPerPageOptions={[10, 25, 50]}
                  loading={props.isLoading}
                  autoHeight={true}
        />
    );
}