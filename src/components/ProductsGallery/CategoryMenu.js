/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Button, Box } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))(({ theme }) => ({
  padding: '0',
  '& li': {
    fontSize: '18px',
    transition: 'all ease 300ms',
  },
  '& li:hover': {
    // fontSize: '21px',
    backgroundColor: '#fb48c4',
    color: '#fff',
  },
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 280,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '0',
      fontSize: '30px',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

export default function CategoryMenu(props) {
  const body = 'Body Collection';
  const flower = 'Flower Collection';
  const food = 'Food Collection';
  const oil = 'Oil Collection';
  const { handleChange, name } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuBtnText, setMenuBtnText] = React.useState(body);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuClickTrigger = (data) => {
    setMenuBtnText(data);
    setAnchorEl(null);
    if (data === body) handleChange('BODY_COLLECTION');
    else if (data === food) handleChange('FOOD_COLLECTION');
    else if (data === flower) handleChange('FLOWER_COLLECTION');
    else if (data === oil) handleChange('OIL_COLLECTION');
  };
  useEffect(() => {
    if (name) {
      setMenuBtnText(`${name} collection`);
      if (name === 'body') handleChange('BODY_COLLECTION');
      else if (name === 'food') handleChange('FOOD_COLLECTION');
      else if (name === 'flower') handleChange('FLOWER_COLLECTION');
      else if (name === 'oil') handleChange('OIL_COLLECTION');
    } else setMenuBtnText(body);
  }, []);
  return (
    <Box sx={{ p: '24px 8px', textAlign: 'center' }}>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon sx={{ width: '30px', height: '30px' }} />}
        sx={{ color: '#fff', fontSize: '24px' }}
      >
        {menuBtnText}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => menuClickTrigger(body)} disableRipple>
          {body}
        </MenuItem>
        <MenuItem onClick={() => menuClickTrigger(flower)} disableRipple>
          {flower}
        </MenuItem>
        <MenuItem onClick={() => menuClickTrigger(oil)} disableRipple>
          {oil}
        </MenuItem>
        <MenuItem onClick={() => menuClickTrigger(food)} disableRipple>
          {food}
        </MenuItem>
      </StyledMenu>
    </Box>
  );
}
