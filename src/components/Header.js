import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components';


const Header = styled.header`
    color:#fff;
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items:center;
    padding: 0 10px;
    background-color:rgba(20,20,20,.8);
    box-shadow: 0 1px 5px 2px rgba(0,0,0,.8)

`;

const List = styled.ul`
    display:flex;
    &:hover{
    }
`;

const Item = styled.li`
    width:80px;
    height:50px;
    text-align:center;
    border-bottom: 5px solid ${props => props.current ? "#3498db" : "transparent"};
    transition: border-bottom .5s ease-in-out
    /* &:not(:last-child){
        margin-right: 10px;
    } */
`;

const SLink = styled(Link)`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const HLink = styled.span`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export default withRouter(({ location: { pathname } }) => (
    <Header>

        <List>
            <Item current={pathname === '/'}>
                {pathname === '/' ? <HLink>Movies</HLink> : <SLink to="/">Movies</SLink>}
            </Item>
            <Item current={pathname === '/tv'}>
                {pathname === '/tv' ? <HLink>Shows</HLink> : <SLink to="/tv">Shows</SLink>}
            </Item>
            <Item current={pathname === '/search'}>
                {pathname === '/search' ? <HLink>Search</HLink> : <SLink to="/search">Search</SLink>}
            </Item>
        </List>
    </Header>
))   