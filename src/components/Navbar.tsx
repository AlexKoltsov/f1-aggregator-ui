import React from 'react';
import clsx from 'clsx';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import MapIcon from '@material-ui/icons/Map';
import GroupIcon from '@material-ui/icons/Group';
import {Link} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
    }),
);

const pages = [
    {
        id: 1,
        text: "Drivers",
        url: "/drivers",
        icon: <PersonIcon/>,
    },
    {
        id: 2,
        text: "Circuits",
        url: "/circuits",
        icon: <MapIcon/>,
    },
    {
        id: 3,
        text: "Constructors",
        url: "/constructors",
        icon: <GroupIcon/>,
    },
    {
        id: 4,
        text: "Races",
        url: "/races",
        icon: <MapIcon/>,
    },
]

export function NavBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedPageId, setSelectedPageId] = React.useState(1);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <IconButton onClick={handleDrawerToggle}>
                    <MenuIcon/>
                </IconButton>
                <Divider/>
                <List>
                    {pages.map(page => {
                        return (
                            <ListItem button key={page.id} component={Link} to={page.url}
                                      selected={selectedPageId === page.id}
                                      onClick={setSelectedPageId.bind(null, page.id)}>
                                <ListItemIcon>{page.icon}</ListItemIcon>
                                <ListItemText primary={page.text}/>
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
        </>
    )
}