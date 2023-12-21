import './styles.css';
import { ProjectCardProps } from './types.ts';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';

export const ProjectCard = ({ id, name, budget, category, handleRemove }: ProjectCardProps) => {

	const remove = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		handleRemove(id);
	};

	return(
		<div className="project-card">
			<h4>{name}</h4>
			<p>
				<span>Orçamento: </span> R${budget}
			</p>
			<p className="category-text">
				<span className={`${category.toLowerCase()}`}></span> {category}
			</p>
			<div className="project-card-actions">
				<Link to={`/project/${id}`}>
					<BsPencil /> Editar
				</Link>
				<button onClick={remove}>
					<BsFillTrashFill /> Remover
				</button>
			</div>
		</div>
	);
}