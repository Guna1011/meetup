import { Modal, ModalOverlay, ModalContent, chakra, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Stack, FormControl, FormLabel, Input, FormErrorMessage, Select, Textarea, Progress } from '@chakra-ui/react'
import { useFrappeCreateDoc } from 'frappe-react-sdk'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type Props = {
    isOpen: boolean
    onClose: () => void
}
interface FormFields {
    name1: string
    gender: string
}
export const AddMeetupRecord = ({ isOpen, onClose }: Props) => {

   

    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>()

    const { createDoc, loading, error } = useFrappeCreateDoc()


    const onSubmit = async (data: FormFields) => {
       
            createDocument(data)
        

    }

    const createDocument = (data: FormFields) => {
        createDoc('Meetup Profile', {
            ...data,

        })
            .then(() => {
                onClose()
            })

    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <chakra.form onSubmit={handleSubmit(onSubmit)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Meetup Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <FormControl isRequired isInvalid={!!errors.name1}>
                                <FormLabel>Name</FormLabel>
                                <Input type='text' {...register('name1')} />                    
                             </FormControl>
                            <FormControl isInvalid={!!errors.gender}>
                                <FormLabel>Gender</FormLabel>
                                <Textarea {...register('gender')} />
                                <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
                            </FormControl>
                            
                            
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button isLoading={loading} type='submit' colorScheme='blue'>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </chakra.form>
        </Modal>
    )
}