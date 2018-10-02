import * as React from 'react';
import { Paper } from '@material-ui/core';
import Layout from './components/layout/Layout';

class App extends React.Component {
	public render() {
		return (
			<Layout caption='Fleet management system' version='3.2.15.26'>
				<Paper>Main content</Paper>
			</Layout>
		);
	}
}

export default App;
