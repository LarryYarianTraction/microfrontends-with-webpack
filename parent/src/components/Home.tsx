import {
	Box,
	Input,
	Text
} from '@chakra-ui/react'
import { FunctionComponent, ReactElement, useEffect, useState } from 'react'
import { useSessionStore } from '../stores/sessionStore'

export const Home: FunctionComponent = (): ReactElement => {
	const { search: setSessionStoreSearch, searchText } = useSessionStore()

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSessionStoreSearch(event.target.value)
	}

	return (
		<Box>
			<Input
				placeholder="Search..."
				value={searchText}
				onChange={handleSearch}
				width='50%'
				backgroundColor='white'
				my={4}
			/>
			<Text mt={2}>
				{searchText}
			</Text>
		</Box>
	)
}
