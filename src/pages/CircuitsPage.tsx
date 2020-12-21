import * as React from 'react';
import {useEffect, useState} from 'react';
import {ColDef} from '@material-ui/data-grid';
import axios from 'axios'
import GeneralDataTable from "../components/GeneralDataTable";
import { ICircuit } from '../model/Circuit';

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
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <GeneralDataTable isLoading={isLoading} rows={data} columns={columns}/>
    );
}