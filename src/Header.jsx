import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

export const Header = ({handleDrawerToggle, drawerWidth}) => {
    return (
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Live Like
            </Typography>
          </Toolbar>
        </AppBar>
    )
}