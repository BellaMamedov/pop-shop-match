import React from "react";
import Logo from "../media/static/logo.png";
import "../media/navbar.css";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={Logo} />
      <ul className="navbar-nav">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker localeText={{ start: 'From', end: 'To' }} />
      </DemoContainer>
    </LocalizationProvider><SearchIcon className="navbar-search-icon" fontSize="medium" />
      </ul>
      <div className="profile-image">
        <img src="https://avatars.githubusercontent.com/u/94701315" />
      </div>
  </div>
  );
}

export default Navbar;