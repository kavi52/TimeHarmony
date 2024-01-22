import { Accordion, AccordionDetails, AccordionSummary, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material'
import { useTheme } from '../../theme'
import { MenuItems } from '../MenuItems'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DrawerHeader, StyledDrawer } from './style';
import { useLocation, useNavigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeDrawer, openDrawer } from '../../features/drawer/drawerSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';

const AppSidebar = () => {
    const theme = useTheme()
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const isDrawerOpen = useSelector((state: any) => state.drawer.isDrawerOpen);

    const handleMenuItemClick = (target: string) => {
        console.log("target", target)
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
                {MenuItems().map(({ name, icon, label, targetLink, submenu }, index) => (
                    <ListItem key={`${name}-${index}`} disablePadding sx={{ display: 'block' }}>
                        {
                            submenu?.length ? (
                                <Accordion
                                    defaultExpanded
                                    style={{
                                        backgroundColor: theme.customColor.sidebar.background,
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{
                                            color: theme.customColor.sidebar.icon
                                        }} />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{
                                            padding: '0px',
                                            margin: 0,
                                            backgroundColor: location.pathname === targetLink ? theme.customColor.sidebar.activeBackground : 'inherit',
                                            '& .MuiAccordionSummary-content': {
                                                margin: 0,
                                            },
                                            '& .MuiAccordionSummary-content.Mui-expanded': {
                                                margin: 0,
                                            },
                                            '&:hover': {
                                                backgroundColor: location.pathname === targetLink ? theme.customColor.sidebar.activeBackground : theme.customColor.sidebar.hoverBackground,
                                            }
                                        }}
                                    >
                                        <Tooltip title={isDrawerOpen ? '' : label} arrow placement='right' >
                                            <ListItemButton
                                                sx={{
                                                    minHeight: 48,
                                                    justifyContent: isDrawerOpen ? 'initial' : 'center',
                                                    px: 2.5,
                                                    paddingRight: isDrawerOpen ? 2.5 : '0px'
                                                }}
                                                onClick={() => {
                                                    if (!targetLink) return;
                                                    handleMenuItemClick(targetLink)
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        mr: isDrawerOpen ? 3 : 'auto',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {icon}
                                                </ListItemIcon>
                                                {isDrawerOpen && (
                                                    <ListItemText
                                                        primary={label}
                                                        sx={{
                                                            opacity: isDrawerOpen ? 1 : 0,
                                                            color: theme.customColor.sidebar.text
                                                        }}
                                                    />
                                                )}
                                            </ListItemButton>
                                        </Tooltip>

                                    </AccordionSummary>
                                    <AccordionDetails style={{
                                        padding: '0px',
                                    }}>
                                        {
                                            submenu.map(({ label: submenuLabel, name: submenuName, targetLink: submenuTarget, icon: submenuIcon }, submenuIndex) => (
                                                <Tooltip title={isDrawerOpen ? '' : submenuLabel} arrow placement='right' >
                                                    <ListItemButton
                                                        sx={{
                                                            minHeight: 48,
                                                            justifyContent: isDrawerOpen ? 'initial' : 'center',
                                                            backgroundColor: location.pathname === submenuTarget ? theme.customColor.sidebar.activeBackground : 'inherit',
                                                            '&:hover': {
                                                                backgroundColor: location.pathname === submenuTarget ? theme.customColor.sidebar.activeBackground : theme.customColor.sidebar.hoverBackground,
                                                            },
                                                            px: 2.5,
                                                            paddingLeft: isDrawerOpen ? '50px' : 2.5
                                                        }}
                                                        onClick={() => handleMenuItemClick(submenuTarget)}
                                                        key={`${submenuName}-${index}-${submenuIndex}`}
                                                    >
                                                        <ListItemIcon
                                                            sx={{
                                                                minWidth: 0,
                                                                mr: isDrawerOpen ? 2 : 'auto',
                                                                justifyContent: 'center',
                                                            }}
                                                        >
                                                            {submenuIcon}
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={submenuLabel}
                                                            sx={{
                                                                opacity: isDrawerOpen ? 1 : 0,
                                                                color: theme.customColor.sidebar.text,
                                                            }}

                                                        />
                                                    </ListItemButton>
                                                </Tooltip>
                                            ))
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            ) : (
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
                                            {icon ?? (
                                                <ExtensionOutlinedIcon style={{
                                                    color: theme.customColor.sidebar.icon
                                                }} />
                                            )}
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
                            )
                        }
                    </ListItem>
                ))}
            </List>
        </StyledDrawer>
    )
}

export default AppSidebar