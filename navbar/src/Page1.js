import './App.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropDownButton from 'react-bootstrap/DropdownButton';
import * as Icons from "react-icons/fa";
import './Page1.css'
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
function Page1() {
  return (
    <Dropdown >
      <DropDownButton className='dropdown'autoClose='outside' title='NavBar' icon='Icons.FaBars'>
        <Dropdown.Item href='/home'>
          Home
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href='/login'>
          Login
        </Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item href='/form'>
          Student Registration Form
        </Dropdown.Item>
      </DropDownButton>
    </Dropdown>
  );
}

export default Page1;
