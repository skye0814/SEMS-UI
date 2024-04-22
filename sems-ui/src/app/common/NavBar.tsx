import React, { useEffect, useState } from 'react';
import '../../styles/navbar.css';
import { Link } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Drawer, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Col, Container, Row } from 'react-bootstrap';
import { getCurrentUser, logout } from '../services/authService';
// import { getCurrentUser, logout } from '../services/authService';
// import { Customer } from '../models/Customer';

interface DrawerItem{
  icon: IconProp,
  text: string,
  location: () => void
}

export default function NavBar(){
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let drawerItemsNavigation: DrawerItem[] = [
    {
      icon: 'calendar',
      text: 'Dashboard',
      location: () => {
        window.location.href = '/admin/dashboard'
      }
    },
    {
      icon: 'calendar',
      text: 'Events',
      location: () => {
        window.location.href = '/admin/events-manager'
      }
    },
    {
      icon: 'person',
      text: 'Participants',
      location: () => {
        window.location.href = '/admin/participants'
      }
    },
    {
      icon: 'gamepad',
      text: 'Sports',
      location: () => {
        window.location.href = '/admin/sports-manager'
      }
    },
    {
      icon: 'dollar-sign',
      text: 'Finance',
      location: () => {
        window.location.href = '/admin/finance'
      }
    },
    {
      icon: 'tower-broadcast',
      text: 'Broadcast',
      location: () => {
        window.location.href = '/admin/broadcast'
      }
    }
  ]

  const getUser = async () => {
      try{
        const response = await getCurrentUser();
        if (response?.data !== undefined){
          setIsUserLoggedIn(true);
        }
        else {
          setIsUserLoggedIn(false);
        }

        // setCustomer(response?.data);
      }
      catch(error){
        console.log(error);
      }
  }

  const toggleDrawer = (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(inOpen);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  useEffect(() => {
    // Remove box shadow of navbar when at starting pos
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Logic for hiding nav when scroll down, showing nav when scroll up
    let navBar = document.getElementById("navbar") as HTMLElement;
    if (navBar){
      let prevScrollPos = window.scrollY;
      window.addEventListener('scroll', () => {
        let currentScrollPos = window.scrollY;
        prevScrollPos > currentScrollPos ? navBar.style.top = '0' : navBar.style.top = '-70px';
        prevScrollPos = currentScrollPos;
        setShowUserDropdown(false);
      });
    }
  },[]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  return(
      <nav className={`navbar-custom ${scrolled ? 'with-box-shadow' : 'with-box-shadow'}`} id='navbar'>
      <div className="logo" onClick={()=>{window.location.href = '/'}}>
          {/* <Typography
            fontWeight="bolder"
            textColor='black'
            fontFamily='Dancing Script'
            fontSize='20px'
            startDecorator={
              <Box
                component="span"
                sx={{
                  width: '50px',
                  height: '50px',
                  backgroundImage: `url("/images/logoblack.png")`,
                  backgroundSize: "110%",
                  backgroundRepeat: "no-repeat"
                }}
              />
            }
          >
            Eyecatcher <br/> Photography
          </Typography> */}
      </div>
      <ul className="nav-links">
        <div className="menu">
          <li>
            <Link to="admin/dashboard">Home</Link>
          </li>
          <li>
            <Link to="admin/events-manager">Events</Link>
          </li>
          <li>
            <Link to="admin/sports-manager">Sports</Link>
          </li>
          <li>
            <Link to="admin/team-manager">Team</Link>
          </li>
        </div>
      </ul>

      <div className="right-nav">
        <FontAwesomeIcon 
          icon='bars' 
          style={{
            fontSize: '30px', 
            color: '#F8F9FB',
            cursor: 'pointer'
          }}
          onClick={handleShow}
        />

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Container>
              {drawerItemsNavigation.map((drawerItem) => {
                  return(
                    <Row 
                      key={drawerItem.text}
                      className="custom-list-item"
                      onClick={drawerItem.location}
                      sx={{
                        '&:hover': {
                          cursor: 'pointer'
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={drawerItem.icon} style={{fontSize: '20px', margin: 'auto'}} />
                      <span style={{fontWeight: '600'}}>{drawerItem.text}</span>
                    </Row>
                  );
                })}
            </Container>

            <Container style={{
              position: "absolute",
              bottom: 20,
              width: '90%'
            }}>
                <Row
                  className="custom-list-item"
                  onClick={logout}
                  sx={{
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  }}
                >
                  <FontAwesomeIcon icon='right-from-bracket' style={{fontSize: '20px', margin: 'auto'}} />
                  <span style={{fontWeight: '600'}}>Logout</span>
                </Row>
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
        {/* <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            sx={{
              margin: '50px 20px 20px 20px',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              display: isUserLoggedIn ? 'unset' : 'flex',
           }}
          > 

          {!isUserLoggedIn &&
          <>
            <div style={{margin: 'auto', display: 'grid', rowGap: '10px'}}>
              <Typography 
                fontFamily='General Sans'
                sx={{
                  color: 'black',
                  fontSize: '15px'
                }}
              >
                You are not logged in
              </Typography>
              <Button
                className='primary-btn'
                onClick={()=> window.location.href = '/login'} 
                style={{
                  margin: 'auto'
              }}
              >
                Sign In
              </Button>
            </div>
          </>}
            
          {isUserLoggedIn &&
          <>
            <Card
              variant="outlined"
              orientation="horizontal"
              sx={{
                borderRadius: '35px',
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
              }}
            >
              <Avatar src='/images/icons/man.png' alt='user' sx={{margin: 'auto'}}/>
              <CardContent>
                <Typography fontSize='md' fontWeight='bold' id="card-description">
                  {customer?.firstName} {customer?.lastName}
                </Typography>
                <Typography level="title-sm" id="card-description">
                  {customer?.applicationUser.email}
                </Typography>
              </CardContent>
            </Card>

            <Typography className='drawer-list-title'>
              Account
            </Typography>
            <ul className='drawer-list-item'>
              {drawerItemsAccount.map((drawerItem) => {
                  return(
                    <ListItem 
                      key={drawerItem.text}
                      className="custom-list-item"
                      onClick={drawerItem.location}
                      sx={{
                        '&:hover': {
                          cursor: 'pointer'
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={drawerItem.icon} style={{fontSize: '20px', margin: 'auto'}} />
                      <span style={{fontWeight: '600'}}>{drawerItem.text}</span>
                    </ListItem>
                  );
                })}
            </ul>
            <Divider sx={{margin: '40px 15px 0px 15px'}}/>
            <Typography className='drawer-list-title'>
              Navigation
            </Typography>
            <ul className='drawer-list-item'>
              {drawerItemsNavigation.map((drawerItem) => {
                  return(
                    <ListItem 
                      key={drawerItem.text}
                      className="custom-list-item"
                      onClick={drawerItem.location}
                      sx={{
                        '&:hover': {
                          cursor: 'pointer'
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={drawerItem.icon} style={{fontSize: '20px', margin: 'auto'}} />
                      <span style={{fontWeight: '600'}}>{drawerItem.text}</span>
                    </ListItem>
                  );
                })}
            </ul>
            <ul className='drawer-list-item' style={{position: 'absolute', bottom: '40px', width: '90%'}}>
              <ListItem
                className="custom-list-item"
                onClick={logout}
                sx={{
                  '&:hover': {
                    cursor: 'pointer'
                  }
                }}
              >
                  <FontAwesomeIcon icon='sign-out' style={{fontSize: '20px', margin: 'auto'}} />
                  <span style={{fontWeight: '600'}}>Logout</span>
              </ListItem>
            </ul>
          </>}
          </Box>
        </Drawer> */}
      </div>
    </nav>
  );
}

