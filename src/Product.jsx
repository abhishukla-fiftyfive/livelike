import { Avatar, Box, CardContent, Typography } from "@mui/material"

export const Product = ({product}) => {
    return (
        <>
      <CardContent sx={{background: '#80808033'}}>
      <Box display="flex" flexDirection="column">
      <Typography className='title' sx={{ fontSize: 14, mb: 4 }} color="text.secondary" gutterBottom>
          {product.title}
        </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-evenly">
      <Avatar
        alt={product.title}
        src={product.image}
        sx={{ width: 56, height: 56 }}
      />
      <span>${product.price}</span>
      </Box>
      <Typography sx={{ fontSize: 12, mt: 4, mb: 2 }} align='left' color="text.secondary" gutterBottom>
          Description:
        </Typography>
        <Typography className='desc' sx={{ fontSize: 12 }} align='left' color="text.secondary" gutterBottom>
          {product.description}
        </Typography>
      </Box>
      </CardContent>
    </>
    )
}