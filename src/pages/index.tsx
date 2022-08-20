import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import dayjs from 'dayjs';

import { initializeApollo } from '../lib/apolloClient';
import { FETCH_USER_INFO_QUERY } from '../shared/usersGraphql';
import { Main } from './styles';

const Home: NextPage = ({ data: { user }, loading, networkStatus }: any) => {
  if (loading) return <p>loading..</p>;

  return (
    <Main.Container>
      <Main.Image src={user?.avatar} />
      <Main.Wrapper>
        <Main.Time dateTime={dayjs().format()}>{dayjs().format('YYYY-MM-DD')}</Main.Time>
        <Main.Text>{user?.name}</Main.Text>
      </Main.Wrapper>
    </Main.Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const client = initializeApollo();
  const { data, loading, networkStatus } = await client.query({
    query: FETCH_USER_INFO_QUERY,
  });

  return {
    props: { data, loading, networkStatus },
  };
};
