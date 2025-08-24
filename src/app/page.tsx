import {AbsoluteCenter, Box, Button, Flex, Heading, VStack} from "@chakra-ui/react";
import styles from "./page.module.css";
import Link from "next/link";
import {Logo} from "@/components/logo/Logo";

export default function Home() {
    return (
        <Box className={styles.gradient}>
            <AbsoluteCenter>
                <VStack>
                    <Heading size='6xl'>Welcome to</Heading>
                    <Logo/>
                    <Flex w='100%' justifyContent='center' alignItems='center' gap='4' mt='4'>
                        <Button colorPalette='teal' variant='outline' size='lg' p='4' asChild>
                            <Link href='/login'>
                                Log In
                            </Link>
                        </Button>
                        <Button colorPalette='teal' variant='solid' size='lg' p='4' asChild>
                            <Link href='/movies'>
                                Continue as Guest
                            </Link>
                        </Button>
                    </Flex>
                </VStack>
            </AbsoluteCenter>
        </Box>
    );
}
