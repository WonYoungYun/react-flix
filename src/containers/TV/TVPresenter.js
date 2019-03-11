import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Poster from '../../components/Poster';

const Container = styled.div`
    padding:20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => <>
    <Helmet>
        <title>reactflix | 프로그램</title>
    </Helmet>
    {loading ? <Loader /> : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="현재 최고 인기">{topRated.map(show => <Poster
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
            {popular && popular.length > 0 && (
                <Section title="인기있는 프로그램">{popular.map(show => <Poster
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
            {airingToday && airingToday.length > 0 && (
                <Section title="오늘의 프로그램">{airingToday.map(show => <Poster
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
            {error && <Message text={error} color="#e74c3c" />}
        </Container>
    )};
</>

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TVPresenter