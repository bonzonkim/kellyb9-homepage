import { Box, Container } from '@chakra-ui/react';
import NavBar from '../navbar';
import Head from 'next/head';
//import NoSsr from '../no-ssr';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Bumgu Kang | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
