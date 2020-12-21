import * as React from 'react';
import {DataGrid, ColDef, ValueGetterParams} from '@material-ui/data-grid';
import {useEffect, useState} from "react";
import axios from 'axios'
import {IDriver} from "../model/Driver";
import {CircularProgress} from '@material-ui/core';

const columns: ColDef[] = [
    {
        field: 'id',
        type: 'number',
        headerName: 'ID',
        flex: 1,
    },
    {
        field: 'number',
        type: 'number',
        headerName: 'Number',
        flex: 1,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        flex: 3,
        valueGetter: (params: ValueGetterParams) => `${params.getValue('forename')} ${params.getValue('surname')}`,
    },
    {
        field: 'forename',
        hide: true,
    },
    {
        field: 'surname',
        hide: true,
    },
    {
        field: 'nationality',
        headerName: 'Nationality',
        flex: 2,
    },
    {
        field: 'dob',
        type: 'date',
        headerName: 'Birth date',
        flex: 2,
    },
];

const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
})

export default function DriversPage() {
    const [data, setData] = useState<IDriver[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        api.get<IDriver[]>('drivers')
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