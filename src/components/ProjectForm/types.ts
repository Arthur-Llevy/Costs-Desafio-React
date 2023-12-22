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

type ProjectFormProps = {
	btnText: string;
	projectData?: ProjectType;
	handleSubmit: (project: ProjectType ) => void | boolean;
};

type CategoriesType = {
	id: number;
	name: string;
};

export type { ProjectFormProps, CategoriesType, ProjectType };