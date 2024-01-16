import { Box } from "@mui/material";
import { AppHeader, AppSidebar } from "../components"

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppSidebar />
      <Box sx={{ flexGrow: 1 }}>
        <AppHeader />
        <Box
          component="main"
          sx={{ p: 3 }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default DefaultLayout