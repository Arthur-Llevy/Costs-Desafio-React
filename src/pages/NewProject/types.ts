type ServiceType = {
	name: string;
	cost: number;
	description: string;
	id: number;
}

type CreatePostProps = {
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



export type { CreatePostProps };