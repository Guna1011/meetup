import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Center, HStack, Heading, Link, Spinner, Stack, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import { useFrappeDocTypeEventListener, useFrappeGetDocList } from "frappe-react-sdk"
import { AddMeetupRecord } from "./AddMeetupRecord"

export interface MeetupFields{
	creation: string
	name: string
  name1?: string
	/**	Gender : Data	*/
	gender?: string
	/**	Experience : Data	*/
	experience?: string
	/**	Contact No : Data	*/
	contact_no?: string
	/**	Email : Data	*/
	email?: string
	/**	Location : Data	*/
	location?: string
}


export const MeetupListTab = () => {
  const { data, isLoading, error, mutate } = useFrappeGetDocList<MeetupFields>('Meetup Profile', {
    fields: ['creation','name', 'name1', 'gender', 'experience', 'contact_no', 'email',"location"]
})

const { isOpen, onOpen, onClose } = useDisclosure()

useFrappeDocTypeEventListener('Meetup Profile', (d) => {
  console.log("Event", d)
  if (d.doctype === "Meetup Profile") {
      mutate()
  }
})

  return (
   <Stack>
        <HStack justify={"space-between"}>
            <Heading as="h3" fontSize={"xx-large"}>Meetups</Heading>
            <Box>
            <Button colorScheme="purple" onClick={onOpen}>+ Add</Button>
            </Box>
         </HStack>

         {isLoading && <Center h='40vh'><Spinner /></Center>}
         {error && <Alert status='error'>
         <AlertIcon />
                <AlertTitle>{error.exception}</AlertTitle>
                <AlertDescription>{error.httpStatusText} {error.httpStatus}</AlertDescription>
            </Alert>}

            {data && <Table>
                <Thead>
                    <Tr>
                        <Th>
                            ID
                        </Th>
                        <Th>
                            Creation
                        </Th>
                        <Th>
                            Name1
                        </Th>
                        <Th>
                            Gender
                        </Th>
                        <Th>
                           Experience
                        </Th>
                        <Th>
                            Contact No
                        </Th>
                        <Th>
                            Email
                        </Th>
                        <Th>
                            Location
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((d: MeetupFields) => <Tr key={d.name}>
                        <Td>
                            {d.name}
                        </Td>
                        <Td>
                            {d.creation}
                        </Td>
                        <Td>
                            {d.name1}
                        </Td>
                        <Td>
                            {d.gender}
                        </Td>
                        <Td>
                            {d.experience}
                        </Td>
                        <Td>
                            {d.contact_no}
                        </Td>
                        <Td>
                            {d.email}
                        </Td>
                        <Td>
                            {d.location}
                        </Td>
                    </Tr>)}
                </Tbody>
            </Table>}
            <AddMeetupRecord isOpen={isOpen} onClose={onClose} />

   </Stack>

  )
}
