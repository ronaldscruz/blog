import React from "react"

import {
  Container,
  Box,
  Avatar,
  Hidden,
  Paper,
  InputBase,
  IconButton,
} from "@material-ui/core"
import { Search, Menu } from "@material-ui/icons"

const Header: React.FC = () => {
  return (
    <header>
      <Container maxWidth="xl">
        <Box
          py={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Initial avatar */}
          <Avatar
            alt="Ronald S. Cruz"
            src="https://avatars3.githubusercontent.com/u/36777554?s=460&u=bf553a99edf951be9b8030f793fdece88a255b5b&v=4"
          >
            RC
          </Avatar>

          {/* Menu options (strapi enters here) */}

          {/* Search field */}
          <Hidden mdDown>
            <Paper component="form">
              <Box pl={2}>
                <InputBase
                  placeholder="Search content here"
                  inputProps={{ "aria-label": "Search content here" }}
                />
                <IconButton type="submit" aria-label="search">
                  <Search />
                </IconButton>
              </Box>
            </Paper>
          </Hidden>

          {/* Open mobile menu */}
          <Hidden mdUp>
            <IconButton aria-label="Open side menu">
              <Menu />
            </IconButton>
          </Hidden>
        </Box>
      </Container>
    </header>
  )
}

export default Header
