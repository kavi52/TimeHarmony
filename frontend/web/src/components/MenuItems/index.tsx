import { useTheme } from '../../theme';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

export const MenuItems = () => {
    const theme = useTheme()
    return (
        [
            {
                name: 'dashboard',
                label: 'Dashboard',
                targetLink: '/dashboard',
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
                targetLink: '/attendance',
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
                name: 'employee',
                label: 'Employee',
                targetLink: '/employee',
                icon: (
                    <PersonSearchOutlinedIcon
                        style={{
                            color: theme.customColor.sidebar.icon
                        }}
                    />
                )
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