import {IUser} from "@/models/IUser";
import {Avatar, Box, HoverCard, HStack, Popover, Portal, Text} from "@chakra-ui/react";
import {FC} from "react";
import Link from "next/link";

type Props = {
    user: IUser;
}

export const UserAvatar: FC<Props> = ({user}) => {
    const {image, firstName, lastName, username, email} = user;
    return (
        <>
            <Popover.Root>
                <Popover.Trigger>
                    <HStack>
                        <Avatar.Root>
                            <Avatar.Fallback name={`${firstName} ${lastName}`} />
                            <Avatar.Image src={image} />
                        </Avatar.Root>
                        <Text>{username}</Text>
                    </HStack>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content maxWidth='340px'>

                            <Box>
                                <Text>{firstName}</Text>
                                <Text>{lastName}</Text>
                                <Text>{email}</Text>
                                <Link href={'/login'}>Logout</Link>
                            </Box>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>

        </>

    );
};