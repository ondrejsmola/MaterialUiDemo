import * as React from 'react';
import { Paper } from '@material-ui/core';
import Layout from './components/layout/Layout';

class App extends React.Component {
	public render() {
		return (
			<Layout caption='Fleet management system'>
				<main>
					<Paper>Main content</Paper>
				</main>
			</Layout>
		);
	}
}

export default App;
