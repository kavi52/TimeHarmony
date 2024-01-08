import { createTheme } from '@mui/material/styles';

export const colors = {
    darkBlue: '#1C4E80',
    coral: '#A5D8DD',
    lightGray: '#F1F1F1',
    darkGray: '#202020',
    accent1: '#7E909A',
    accent2: '#A5D8DD',
    highlight: '#0091D5',
}

const theme = createTheme({
    palette: {
        primary: {
            main: colors.darkBlue,
        },
        secondary: {
            main: colors.coral,
        },
        background: {
            default: colors.lightGray,
        },
        text: {
            primary: colors.accent1,
        },
        ...colors,
    },
    typography: {
        h1: {
            color: colors.darkGray,
        },
        h2: {
            color: colors.darkGray,
        },
        h3: {
            color: colors.darkGray,
        },
        body1: {
            color: colors.darkGray,
        },
        body2: {
            color: colors.darkGray,
        },
        
    }
});

export default theme;