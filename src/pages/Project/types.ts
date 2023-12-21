import { ServiceType } from '../../components/ServiceForm/types.ts';

type ProjectType = {
	category: {
		id: number;
		name: string;
	},
	name: string;
	budget: number;
	id: number;
	costs: number;
	services: ServiceType[];
};

type EditPostProps = ProjectType

export type { ProjectType, EditPostProps };