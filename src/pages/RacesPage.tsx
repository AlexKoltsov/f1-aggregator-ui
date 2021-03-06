import * as React from 'react';
import {useEffect, useState} from 'react';
import {ColDef} from '@material-ui/data-grid';
import axios from 'axios'
import GeneralDataTable from "../components/GeneralDataTable";
import {Typography} from "@material-ui/core";
import {IRace} from "../model/Race";

const columns: ColDef[] = [
    {
        field: 'id',
        type: 'number',
        headerName: 'ID',
        hide: true,
    },
    {
        field: 'round',
        type: 'number',
        headerName: 'Round',
        flex: 1,
    },
    {
        field: 'name',
        headerName: 'Name',
        flex: 3,
    },
    {
        field: 'dateTime',
        type: 'dateTime',
        headerName: 'Date&Time',
        flex: 2,
    },
];

const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
})

export default function DriversPage() {
    const [data, setData] = useState<IRace[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        api.get<IRace[]>('races')
            .then(res => setData(res.data))
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            <Typography variant="h3">Races</Typography>
            <GeneralDataTable licenseStatus={"any"} rows={data} columns={columns} loading={isLoading}/>
        </>
    );
}