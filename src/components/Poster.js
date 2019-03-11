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
    }
`;

const Title = styled.span`
    display:block;
    margin-bottom: 3px;
`;

const Year = styled.span`
    font-size:10px;
    color:rgba(255,255,255, .5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/noPosterSmall.png")} />
                {rating &&
                    <Rating>
                        {Array(Math.round(rating / 2)).fill(1).map((e, idx) =>
                            <span role="img" aria-label="평점" key={idx}>⭐</span>
                        )}
                        {" "}
                        {rating}/10
                </Rating>
                }
            </ImageContainer>
            {/* <Title>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</Title> */}
            <Title>{title}</Title>
            <Year>{year}</Year>
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