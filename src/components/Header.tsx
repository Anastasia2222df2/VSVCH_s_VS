import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box, 
  Switch, 
  FormControlLabel 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  organizationName: string;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Header = ({ organizationName, darkMode, setDarkMode }: HeaderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {organizationName}
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" component={Link} to="/">Главная</Button>
            <Button color="inherit" component={Link} to="/courses">Курсы</Button>
            <Button color="inherit" component={Link} to="/about">О нас</Button>
          </Box>

          <FormControlLabel
            control={
              <Switch 
                checked={darkMode} 
                onChange={(e) => setDarkMode(e.target.checked)} 
                color="default" 
              />
            }
            label={darkMode ? 'Тёмная' : 'Светлая'}
            sx={{ ml: 2 }}
          />
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            <ListItem component={Link} to="/">
              <ListItemText primary="Главная" />
            </ListItem>
            <ListItem component={Link} to="/courses">
              <ListItemText primary="Курсы" />
            </ListItem>
            <ListItem component={Link} to="/about">
              <ListItemText primary="О нас" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};