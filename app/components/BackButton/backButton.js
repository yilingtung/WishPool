import React from 'react';
import { Button } from 'react-native';

const BackButton = goBack => (
	<Button
		onPress={() => goBack}
		title="BACK"
	/>
);

export default BackButton;
