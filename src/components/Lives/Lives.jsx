import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';



export default function Lives({ lives }) {
  
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#E63946',
      fontSize: 35,
    },
    '& .MuiRating-iconHover': {
      color: '#E63946',
      fontSize: 35,
    },
  });
  
  return (
    <StyledRating name="read-only"
      value={lives}
      max={3}
      readOnly
      icon={<FavoriteIcon fontSize="35" />}
      emptyIcon={<FavoriteBorderIcon sx={{
        fontSize: 35
      }} />} 
      />)
}