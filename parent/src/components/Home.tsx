import {
	Box,
	Input
} from '@chakra-ui/react'
import { FunctionComponent, ReactElement, useState } from 'react'

export const Home: FunctionComponent = (): ReactElement => {
	const [search, setSearch] = useState('')

	const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}

	return (
		<Box>
			<Input
				placeholder="Search..."
				value={search}
				onChange={handleSearchInputChange}
				width="50%"
				my={4}
			/>
		</Box>
	)
}
