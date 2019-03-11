import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Poster from '../../components/Poster';

const Container = styled.div`
     padding: 20px;
     

`;

const Button = styled.button`
    all:unset;
    width:100%;
    height:40px;
    text-align:center;
    font-size: 12px;
    font-weight:600;
    background-color: #222;
    cursor:pointer;
    transition: background-color .1s linear;
    &:hover{
        background-color:#333;
    }
`;

const HomePresenter = ({
    nowPlaying,
    popular,
    upcoming,
    getNextPage,
    getNext,
    loading,
    error
}) => <>
        <Helmet>
            <title>reactflix | 영화</title>
        </Helmet>
        {loading ? <Loader /> : (
            <Container>
                {nowPlaying && nowPlaying.length > 0 &&
                    <Section title="현재상영영화" >
                        {nowPlaying.map(movie =>
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={movie.release_date}
                                isMovie={true} />)}
                    </Section>
                }
                {upcoming && upcoming.length > 0 &&
                    <Section title="개봉예정영화" >
                        {upcoming.map(movie =>
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={movie.release_date}
                                isMovie={true} />)}
                    </Section>
                }
                {popular && popular.length > 0 &&
                    <Section title="인기있는 영화" >
                        {popular.map(movie =>
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={movie.release_date}
                                isMovie={true} />)}
                    </Section>
                }
                <Button onClick={getNextPage} disabled={getNext}>더보기</Button>
                {/* 역대영화 페이징 가능하게만들기 */}
                {error && <Message text={error} color="#e74c3c" />}
            </Container>
        )}
    </>


HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    getNext: PropTypes.bool.isRequired,
    getNextPage: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default HomePresenter