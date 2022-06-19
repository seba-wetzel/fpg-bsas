import Link from 'next/link'
// Drawer
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import * as MdIcons from 'react-icons/md'
// Json con las opciones del menu
import { menuEntries } from 'utils/menuEntries'

export const MenuList = ({ toggleDrawer }) => (
  <Box
    sx={{ auto: 250 }}
    role='presentation'
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <List>
      {menuEntries.map((entrie, index) => (
        <Link href={entrie.href} key={index} passHref>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{
                fontSize: '2rem'
              }}
              >
                {MdIcons[entrie.icon]()}
              </ListItemIcon>
              <ListItemText primary={entrie.text} />
            </ListItemButton>
          </ListItem>
        </Link>

      ))}
    </List>
    <Divider />
  </Box>
)
