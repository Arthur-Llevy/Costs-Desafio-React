type ServiceCardProps = {
	id: number;
	name: string;
	cost: number;
	description: string;
	handleRemove: (id: number, cost: number) => void;
};

export type { ServiceCardProps };