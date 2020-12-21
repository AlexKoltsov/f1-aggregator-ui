import * as React from 'react';
import {DataGrid, ColDef} from '@material-ui/data-grid';
import {useEffect, useState} from "react";
import axios from 'axios'
import {IConstructor} from "../model/Constructor";
import {CircularProgress} from "@material-ui/core";

const columns: ColDef[] = [
    {
        field: 'id',
        type: 'number',
        headerName: 'ID',
        flex: 1,
    },
    {
        field: 'name',
        headerName: 'Name',
        flex: 3,
    },
    {
        field: 'nationality',
        headerName: 'Nationality',
        flex: 2,
    },
];

const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
})

export default function ConstructorsPage() {
    const [data, setData] = useState<IConstructor[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        api.get<IConstructor[]>('constructors')
            .then(res => setData(res.data))
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        isLoading ?
            <CircularProgress/> :
            <DataGrid rows={data}
                      columns={columns}
                      pageSize={10}
                      rowsPerPageOptions={[10, 25, 50]}
            />
    );
}