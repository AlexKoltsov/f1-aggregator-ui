import React from "react";
import {DataGrid, GridComponentProps} from "@material-ui/data-grid";

export default function GeneralDataTable(props: GridComponentProps) {
    return (
        <DataGrid rows={props.rows}
                  columns={props.columns}
                  pageSize={10}
                  rowsPerPageOptions={[10, 25, 50]}
                  loading={props.loading}
                  autoHeight={true}
        />
    );
}