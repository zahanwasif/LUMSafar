import { Moment } from 'moment';

export interface EventData {
	title: string;
	creatorId: string;
	creatorUsername: string;
	description: string;
	location: string;
	tags: Array<string>;
	startTime: number;
	endTime: number;
	interestedUsers: Array<number>;
	imagePath: string;
}
