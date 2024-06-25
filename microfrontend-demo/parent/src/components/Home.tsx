import {
	Box,
	Input,
	Text
} from '@chakra-ui/react'
import { FunctionComponent, ReactElement, useEffect } from 'react'
import { useSessionStore } from '../stores/sessionStore'

import 'spotify/song-seeker'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spotify-song-seeker': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

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
				width='30%'
				backgroundColor='white'
				my={4}
			/>
			<spotify-song-seeker search-text={searchText}></spotify-song-seeker>
		</Box>
	)
}
