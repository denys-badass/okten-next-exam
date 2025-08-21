import {AbsoluteCenter, Box, Button, Flex, Heading, VStack} from "@chakra-ui/react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <Box className={styles.gradient}>
            <AbsoluteCenter>
                <VStack>
                    <Heading size='6xl'>Welcome to</Heading>
                    <Image src='./moviehub_logo.svg' alt='Logo' width={500} height={250}/>
                    <Flex w='100%' justifyContent='center' alignItems='center' gap='4' mt='4'>
                        <Button colorPalette='teal' variant='outline' size='lg' p='4' asChild>
                            <Link href='/login'>
                                Log In
                            </Link>
                        </Button>
                        <Button colorPalette='teal' variant='solid' size='lg' p='4' asChild>
                            <Link href='/movie'>
                                Continue as Guest
                            </Link>
                        </Button>
                    </Flex>
                </VStack>
            </AbsoluteCenter>
        </Box>
    );
}
