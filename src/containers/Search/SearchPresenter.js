import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from '../../components/Loader';
import Section from '../../components/Section';
import Message from '../../components/Message';
import Poster from '../../components/Poster';


const Container = styled.div`
    padding: 20px;
`;

const Form = styled.form`
    margin-bottom:50px;
    width:100%;
`;

const Input = styled.input`
    all:unset;
    font-size: 28px;
    width: 100%;
`;


const SearchPresenter = ({
    movieResults,
    showResults,
    searchTerm,
    resultTerm,
    handleSubmit,
    updateTerm,
    loading,
    inputRef,
    error
}) =>
    <Container>
        <Helmet>
            <title>reactflix | 검색</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="검색방법 : 셜록 = sherlock"
                value={searchTerm}
                onChange={updateTerm}
                ref={inputRef}
            ></Input>
        </Form>
        {loading ? (<Loader />) :
            (<>
                {movieResults && movieResults.length > 0 && (
                    <Section title="영화">
                        {movieResults.map(movie =>
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={movie.release_date}
                                isMovie={true} />)}
                    </Section>
                )}
                {showResults && showResults.length > 0 && (
                    <Section title="프로그램">
                        {showResults.map(show =>
                            <Poster
                                key={show.id}
                                id={show.id}
                                title={show.name}
                                imageUrl={show.poster_path}
                                rating={show.vote_average}
                                year={show.first_air_date}
                                isMovie={false} />
                        )}
                    </Section>
                )}
            </>
            )}
        {error && <Message text={error} color="#e74c3c" />}
        {showResults &&
            movieResults &&
            showResults.length === 0 &&
            movieResults.length === 0 && (
                <Message text={`검색결과가 없습니다. ${resultTerm}`} color="#95a5a6" />
            )}
    </Container>;

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    showResults: PropTypes.array,
    searchTerm: PropTypes.string,
    resultTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;