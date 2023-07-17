import { useEffect, useState } from 'react'
import './App.css'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import { useProducts } from './hooks/useProducts';
import { CircularProgress, Grid } from '@mui/material';
import { Product } from './Product';
import { Header } from './Header';
import { DrawerWrapper } from './Drawer';

const drawerWidth = 240;

function App(props) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { handleFetchProducts, products, isLoadingProducts } = useProducts();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    handleFetchProducts(selectedCategory);
  }, [selectedCategory])

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
        <DrawerWrapper changeCategory={setSelectedCategory} selectedCategory={selectedCategory} drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} window={window} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Grid container spacing={2}>
            {isLoadingProducts && <CircularProgress />}
            {products.map((product) => (
              <Grid item xs={4} key={`poduct-${product.id}`}>
                <Card variant="outlined">
                  <Product product={product} />
                </Card>
              </Grid>
            ))}

          </Grid>
        </Box>
      </Box>
    </>
  )
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;
