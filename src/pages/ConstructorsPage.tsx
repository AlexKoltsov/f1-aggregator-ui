import * as React from 'react';
import {useEffect, useState} from 'react';
import {ColDef} from '@material-ui/data-grid';
import axios from 'axios'
import {IConstructor} from "../model/Constructor";
import GeneralDataTable from "../components/GeneralDataTable";
import {Typography} from "@material-ui/core";
import {sleeper} from "../utils/DeveloperUtils";

const columns: ColDef[] = [
    {
        field: 'id',
        type: 'number',
        headerName: 'ID',
        flex: 1,
        hide: true,
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
            .then(sleeper(1000))
            .then(res => setData(res.data))
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            <Typography variant="h3">Constructors</Typography>
            <GeneralDataTable rows={data} columns={columns} isLoading={isLoading}/>
        </>    );
}