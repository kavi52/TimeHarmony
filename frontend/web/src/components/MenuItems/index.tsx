import { useTheme } from '../../theme';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import routes from '../../router/routes';

export const MenuItems = () => {
    const theme = useTheme()
    return (
        [
            {
                name: 'dashboard',
                label: 'Dashboard',
                targetLink: routes.dashboard(),
                icon: (
                    <DashboardCustomizeOutlinedIcon
                        style={{
                            color: theme.customColor.sidebar.icon
                        }}
                    />
                )
            },
            {
                name: 'attendance',
                label: 'Attendance',
                targetLink: routes.attendance(),
                icon: (
                    <EventOutlinedIcon
                        style={{
                            color: theme.customColor.sidebar.icon
                        }}
                    />
                )
            },
            {
                name: 'leave',
                label: 'Leave',
                targetLink: '/leave',
                icon: (
                    <EventBusyOutlinedIcon
                        style={{
                            color: theme.customColor.sidebar.icon
                        }}
                    />
                )
            },
            {
                name: 'organization',
                label: 'Organization',
                targetLink: routes.employee(),
                icon: (
                    <BusinessOutlinedIcon
                        style={{
                            color: theme.customColor.sidebar.icon
                        }}
                    />
                ),
                submenu: [
                    {
                        name: 'employee',
                        label: 'Employees',
                        targetLink: '/employee',
                        icon: (
                            <PersonSearchOutlinedIcon
                                style={{
                                    color: theme.customColor.sidebar.subIcon,
                                    fontSize: '20px'
                                }}
                            />
                        ),
                    },
                    {
                        name: 'roles',
                        label: 'Roles',
                        targetLink: '/employee/roles',
                        icon: (
                            <AssignmentIndOutlinedIcon
                                style={{
                                    color: theme.customColor.sidebar.subIcon,
                                    fontSize: '20px'
                                }}
                            />
                        ),
                    },
                    {
                        name: 'department',
                        label: 'Department',
                        targetLink: '/employee/department',
                        icon: (
                            <PersonSearchOutlinedIcon
                                style={{
                                    color: theme.customColor.sidebar.subIcon,
                                    fontSize: '20px'
                                }}
                            />
                        ),
                    },
                    {
                        name: 'function',
                        label: 'Function',
                        targetLink: '/employee/function',
                        icon: (
                            <PersonSearchOutlinedIcon
                                style={{
                                    color: theme.customColor.sidebar.subIcon,
                                    fontSize: '20px'
                                }}
                            />
                        ),
                    },
                    {
                        name: 'employee-category',
                        label: 'Employee Category',
                        targetLink: '/employee/category',
                        icon: (
                            <PersonSearchOutlinedIcon
                                style={{
                                    color: theme.customColor.sidebar.subIcon,
                                    fontSize: '20px'
                                }}
                            />
                        ),
                    },
                ]
            },
            {
                name: 'reports-analytics',
                label: 'Reports and Analytics',
                targetLink: '/reports-analytics',
                icon: (
                    <BarChartOutlinedIcon
                        style={{
                            color: theme.customColor.sidebar.icon
                        }}
                    />
                )
            },
            {
                name: 'profile-settings',
                label: 'Profile and Settings',
                targetLink: '/profile-settings',
                icon: (
                    <ManageAccountsOutlinedIcon
                        style={{
                            color: theme.customColor.sidebar.icon
                        }}
                    />
                )
            },
            {
                name: 'notifications',
                label: 'Notifications',
                targetLink: '/notifications',
                icon: (
                    <NotificationsActiveOutlinedIcon
                        style={{
                            color: theme.customColor.sidebar.icon
                        }}
                    />
                )
            },
            {
                name: 'help-support',
                label: 'Help and Support',
                targetLink: '/help-support',
                icon: (
                    <HelpOutlineOutlinedIcon
                        style={{
                            color: theme.customColor.sidebar.icon
                        }}
                    />
                )
            },
        ]
    )
}