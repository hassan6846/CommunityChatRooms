import React from 'react'
//css
import styles from "./Home.module.css"
import { Avatar, IconButton, TextField, InputAdornment,  } from '@mui/material'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import { Search} from '@mui/icons-material';

const Home = () => {
  return (
    <div className={styles.HomeContainer}>
      <div className={styles.Sidebar}>



        <div className={styles.iconContainer}>
          <Avatar sx={{
            objectFit: "contain"
          }} variant="rounded" src='https://images.seeklogo.com/logo-png/44/1/stackblitz-icon-logo-png_seeklogo-444239.png?v=1957148091787478992' />


          <IconButton sx={{ color: '#CFD4D8' }}>
            <ViewSidebarIcon />
          </IconButton>


        </div>
        <TextField
          fullWidth
          margin="normal"
          name="Search Rooms"
          placeholder='search'
          InputProps={{
            style: {
              fontFamily: "Outfit",
              height: "50px",
              borderColor: "#CFD4D8",
              borderRadius: "10px"
            },
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#CFD4D8' }} />
              </InputAdornment>
            ),

          }}
        />
        {/* Only Contain Active Links */}
        <div>
        <p style={{fontSize:"14px",color:"#acb1b5"}}>#Rooms</p>


        </div>
        {/* Only Contain Active Links */}
    <div>

  
        <div className={styles.LogoutWrapper}>
        <p style={{fontSize:"14px",color:"#acb1b5"}}>More</p>

     
        </div>
        <div className={styles.profileBtn}>
          
          <Avatar src='https://avatar.iran.liara.run/public' />
        
          <div >
            
            <p>UserName</p>
            <p>User Type</p>
          </div>

        </div>
        </div>
      </div>

      <nav className={styles.Navbar}>
        <p>Wow</p>
      </nav>

  
    </div>
  )
}

export default Home