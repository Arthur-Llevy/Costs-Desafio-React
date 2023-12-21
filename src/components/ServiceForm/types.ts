import { ProjectType } from '../../pages/Project/types.ts';

type ServiceFormProps = {
	btnText: string;
	handleSubmit: (project: ProjectType) => void;
	projectData: ProjectType
};

type ServiceType = {
	name: string;
	cost: number;
	description: string;
	id: number;
}

export type { ServiceFormProps, ServiceType };