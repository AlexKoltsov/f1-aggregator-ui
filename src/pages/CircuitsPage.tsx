import * as React from 'react';
import {useEffect, useState} from 'react';
import {ColDef} from '@material-ui/data-grid';
import axios from 'axios'
import GeneralDataTable from "../components/GeneralDataTable";
import {ICircuit} from '../model/Circuit';
import {Typography} from "@material-ui/core";

const columns: ColDef[] = [
    {
        field: 'id',
        type: 'number',
        headerName: 'ID',
        hide: true,
    },
    {
        field: 'name',
        headerName: 'Name',
        flex: 3,
    },
    {
        field: 'country',
        headerName: 'Country',
        flex: 3,
    },
    {
        field: 'location',
        headerName: 'City',
        flex: 3,
    },
];

const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
})

export default function ConstructorsPage() {
    const [data, setData] = useState<ICircuit[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        api.get<ICircuit[]>('circuits')
            .then(res => setData(res.data))
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false))
    }, [])

    setTimeout(resolve => resolve, 2000)

    return (
        <>
            <Typography variant="h3">Circuits</Typography>
            <GeneralDataTable licenseStatus={"any"} rows={data} columns={columns} loading={isLoading}/>
        </>);
}