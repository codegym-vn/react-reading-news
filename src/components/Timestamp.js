import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

export default Timestamp = (props) => {

	const formattedPublished = moment(props.dateTime).startOf('hour').fromNow();

	return (
		<Text style={props.style}>{formattedPublished}</Text>
	)
}

