import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { useCategories } from "./hooks/useCategories";
import { useEffect } from "react";

export const DrawerWrapper = ({ window, drawerWidth, mobileOpen, handleDrawerToggle, changeCategory }) => {

    const { handleFetchCategories, categories } = useCategories();
    useEffect(() => {
        handleFetchCategories();
    }, [])
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <DrawerElements changeCategory={changeCategory} categories={categories} />
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                <DrawerElements changeCategory={changeCategory} categories={categories} />
            </Drawer>
        </Box>
    )
}

const DrawerElements = ({ changeCategory, categories }) => (
    <div>
        <Toolbar />
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={() => changeCategory('')}>
                    <ListItemText primary={'All Categories'} />
                </ListItemButton>
            </ListItem>
            {categories.map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton onClick={() => changeCategory(text)}>
                        <ListItemText primary={text.charAt(0).toUpperCase() + text.slice(1)} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

    </div>
);