import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/084crown.svg'
import styled from 'styled-components';

const Wrapper = styled.div`
    .header {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 10px 15px;
    }
  }
}
`
function Header() {
    return <div className="header" style={{
        height: '70px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space - between',
        marginBottom: '25px'
    }}>
        <Link to='/'>
            <Logo className="logo" style={{
                height: '100%',
                width: '70px',
                padding: '25px'
            }}></Logo>
        </Link>
        <div className="options" style={{
            width: '50 %',
            height: '100 %',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        }}>
            <Link className="option" style={{ padding: '10px 15px' }} to='/shop'>SHOP</Link>
            <Link className="option" to='/shop'>CONTACT</Link>
        </div>
    </div>
}

export default Header;
