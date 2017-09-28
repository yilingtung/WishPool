import React from 'react';
import { Button } from 'react-native';

const BackButton = (navigation, backto) => (
	<Button
		onPress={() => backto}
		title="BACK"
	/>
);

export default BackButton;
