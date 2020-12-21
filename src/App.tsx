import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import {BrowserRouter as Router} from "react-router-dom"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {NavBar} from "./components/Navbar";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            minHeight: '100vh',
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

function App() {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                <div className={classes.toolbar}>
                    <NavBar/>
                </div>
                <main className={classes.content}>
                    <MainContainer/>
                </main>
            </div>
        </Router>
    )
}

export default App;
