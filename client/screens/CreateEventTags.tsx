import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, VStack } from 'native-base';
import React, { useState } from 'react';
import ChipsSearch from '../components/ChipsSearch';
import Screen from '../components/Screen';
import SimpleScreen from '../components/SimpleScreen';
import { RootStackParamList } from '../config/RouteParams';

const Tags = [ 'Badminton', 'Study', 'Cricket', 'Party', 'Music', 'Concert', 'Shugul', 'Sports Fest' ];

type CreateEventTagsScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateEventTags'>;

const CreateEventTagsScreen = (props: CreateEventTagsScreenProps) => {
	const { data } = props.route.params;

	const [ selectedTags, setSelectedTags ] = useState<Array<string>>(data.tags);

	return (
		<SimpleScreen
			heading="Add Tags"
			backButton
			onBackButton={() => {
				let eventData = data;
				eventData.tags = selectedTags;
				props.navigation.navigate('CreateEvent', {
					data: data
				});
			}}
		>
			<ChipsSearch items={Tags} selectedItems={selectedTags} setSelectedItems={setSelectedTags} />
			<Button
				width="100%"
				onPress={() => {
					let eventData = data;
					eventData.tags = selectedTags;
					props.navigation.navigate('CreateEventTime', {
						data: data
					});
				}}
			>
				Next
			</Button>
		</SimpleScreen>
	);
};

export default CreateEventTagsScreen;