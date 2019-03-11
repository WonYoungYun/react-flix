import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    height: 180px;
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    border-radius: 4px;
    background-position:center center;
    transition: opacity .1s linear;
`;

const Rating = styled.span`
    position:absolute;
    bottom:8px;
    right:5px;
    opacity: 0;
`;

const Title = styled.span`
    display:block;
    margin-bottom: 3px;
`;

const Year = styled.span`
    font-size:12px;
    color:rgba(255,255,255, .8);
`;

const Info = styled.div`
    position:absolute;
    top:40%;
    width:100%;
    padding: 0 8px;
    text-align:center;
    opacity:0;
    z-index:1;
`;

const ImageContainer = styled.div`
    position:relative;
    margin-bottom: 5px;
    &:hover{
        ${Image}{
            opacity: 0.3;
        }
        ${Rating}{
            opacity: 1;
        }
        ${Info}{
            opacity:1;
        }
    }
`;



const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Info>
                    <Title>{title}</Title>
                    <Year>{year.substring(0, 4)}</Year>
                </Info>
                <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/noPosterSmall.png")} />
                {rating > 0 &&
                    <Rating>
                        {Array(Math.round(rating / 2)).fill(1).map((e, idx) =>
                            <span role="img" aria-label="평점" key={idx}>⭐</span>
                        )}
                        {" "}
                        {rating}/10
                </Rating>
                }
            </ImageContainer>


        </Container>
    </Link>
)



Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}

export default Poster;