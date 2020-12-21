import * as React from 'react';
import {useEffect, useState} from 'react';
import {ColDef, ValueGetterParams} from '@material-ui/data-grid';
import axios from 'axios'
import {IDriver} from "../model/Driver";
import GeneralDataTable from "../components/GeneralDataTable";
import {Typography} from "@material-ui/core";

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
        <>
            <Typography variant="h3">Drivers</Typography>
            <GeneralDataTable rows={data} columns={columns} isLoading={isLoading}/>
        </>
    );
}