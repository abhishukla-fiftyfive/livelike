import { Avatar, Box, CardContent, Rating, Typography } from "@mui/material"

export const Product = ({product}) => {
    return (
        <>
      <CardContent sx={{background: '#80808033'}}>
      <Box display="flex" flexDirection="column">
      <Typography className='title' sx={{ fontSize: 16, mb: 4, fontWeight: 'bold' }} color="Highlight" gutterBottom>
          {product.title}
        </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-evenly">
      <Avatar
        alt={product.title}
        src={product.image}
        sx={{ width: 56, height: 56 }}
      />
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <span>${product.price}</span>
      <Rating name="size-medium" defaultValue={product.rating.rate} size="small" precision={0.1} />
      <span style={{fontSize: 12}}>Availabel Stock: {product.rating.count}</span>
      </Box>
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