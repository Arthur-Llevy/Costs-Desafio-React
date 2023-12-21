import '../ProjectCard/styles.css';
import { ServiceCardProps } from './types.ts';
import { BsFillTrashFill } from 'react-icons/bs';
import { MouseEvent } from 'react';

export const ServiceCard = ({ id, name, cost, description, handleRemove }: ServiceCardProps) => {

	const remove = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		handleRemove(id, cost);
	};

	return (
		<div className="project-card">
			<h4>{name}</h4>
			<p>
				<span>Custo total: </span> {cost}
			</p>
			<p>{description}</p>
			<div className="project-card-actions"> 
				<button onClick={remove}><BsFillTrashFill />Excluir</button>
			</div>
		</div>
	);
};