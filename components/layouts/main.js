import { Box,Container } from '@chakra-ui/react'
import NavBar from '../navbar.js'
import Head from 'next/head'
import VoxelDog from '../voxel-dog.js'
import NoSsr from '../no-ssr.js'

const Main = ({ children, router})=> {
    return (
    <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Kelly Kang</title>
            </Head>

            <NavBar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                <VoxelDog/>
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main
