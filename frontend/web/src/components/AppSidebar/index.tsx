import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '../../theme'
import { MenuItems } from '../MenuItems'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DrawerHeader, StyledDrawer } from './style';
import { useLocation } from 'react-router-dom';


const AppSidebar = () => {
    const theme = useTheme()
    const location = useLocation();
    const [open, setOpen] = useState(true);
    const handleDrawerClose = () => {
        setOpen(!open);
    };

    return (
        <StyledDrawer
            variant="permanent"
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: theme.customColor.sidebar.background
                }
            }}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronRightIcon style={{
                        color: theme.customColor.sidebar.icon
                    }} />
                </IconButton>
            </DrawerHeader>

            <Divider />

            <List>
                {MenuItems().map(({ name, icon, label, targetLink }, index) => (
                    <ListItem key={`${name}-${index}`} disablePadding sx={{ display: 'block' }}>
                        <Tooltip title={open ? '' : label} arrow placement='right' >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    backgroundColor: location.pathname === targetLink ? theme.customColor.sidebar.activeBackground : 'inherit',
                                    '&:hover': {
                                        backgroundColor: location.pathname === targetLink ? theme.customColor.sidebar.activeBackground : theme.customColor.sidebar.hoverBackground,
                                    },
                                }}
                                href={targetLink ?? '#'}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {icon}
                                    {/* handle when there is no icon available */}
                                </ListItemIcon>
                                <ListItemText
                                    primary={label}
                                    sx={{
                                        opacity: open ? 1 : 0,
                                        color: theme.customColor.sidebar.text
                                    }}
                                />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>
        </StyledDrawer>
    )
}

export default AppSidebar