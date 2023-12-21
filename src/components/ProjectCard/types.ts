type ProjectCardProps = {
	id: number;
	name: string;
	budget: number;
	category: string;
	handleRemove: (id: number) => void;
};

export type { ProjectCardProps }