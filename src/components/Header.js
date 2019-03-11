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
    background-color:rgba(20,20,20);
    box-shadow: 0 1px 5px 2px rgba(0,0,0,.8);
    z-index:9999;

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
    transition: border-bottom .5s ease-in-out;
    /* &:not(:last-child){
        margin-right: 10px;
    } */
`;

const SLink = styled(Link)`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: transparent;
    transition: background-color .1s linear;
    &:hover{
        background-color:#000
    }
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
                {pathname === '/' ? <HLink>영화</HLink> : <SLink to="/">영화</SLink>}
            </Item>
            <Item current={pathname === '/show'}>
                {pathname === '/show' ? <HLink>프로그램</HLink> : <SLink to="/show">프로그램</SLink>}
            </Item>
            <Item current={pathname === '/search'}>
                {pathname === '/search' ? <HLink>검색</HLink> : <SLink to="/search">검색</SLink>}
            </Item>
        </List>
    </Header>
))   