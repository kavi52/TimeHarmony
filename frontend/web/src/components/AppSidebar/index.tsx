import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import { useTheme } from '../../theme'
import { MenuItems } from '../MenuItems'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DrawerHeader, StyledDrawer } from './style';
import { useLocation, useNavigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeDrawer, openDrawer } from '../../features/drawer/drawerSlice';

const AppSidebar = () => {
    const theme = useTheme()
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const isDrawerOpen = useSelector((state: any) => state.drawer.isDrawerOpen);

    const handleMenuItemClick = (target: string) => {
        navigate(target ?? '#')
    }

    return (
        <StyledDrawer
            variant="permanent"
            open={isDrawerOpen}
            PaperProps={{
                sx: {
                    backgroundColor: theme.customColor.sidebar.background
                }
            }}
        >
            <DrawerHeader>
                <IconButton onClick={() => (isDrawerOpen ? dispatch(closeDrawer()) : dispatch(openDrawer()))}>
                    <ChevronRightIcon style={{
                        color: theme.customColor.sidebar.icon
                    }} />
                </IconButton>
            </DrawerHeader>

            <Divider />

            <List>
                {MenuItems().map(({ name, icon, label, targetLink }, index) => (
                    <ListItem key={`${name}-${index}`} disablePadding sx={{ display: 'block' }}>
                        <Tooltip title={isDrawerOpen ? '' : label} arrow placement='right' >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: isDrawerOpen ? 'initial' : 'center',
                                    px: 2.5,
                                    backgroundColor: location.pathname === targetLink ? theme.customColor.sidebar.activeBackground : 'inherit',
                                    '&:hover': {
                                        backgroundColor: location.pathname === targetLink ? theme.customColor.sidebar.activeBackground : theme.customColor.sidebar.hoverBackground,
                                    },
                                }}
                                onClick={() => handleMenuItemClick(targetLink)}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: isDrawerOpen ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {icon}
                                    {/* handle when there is no icon available */}
                                </ListItemIcon>
                                <ListItemText
                                    primary={label}
                                    sx={{
                                        opacity: isDrawerOpen ? 1 : 0,
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