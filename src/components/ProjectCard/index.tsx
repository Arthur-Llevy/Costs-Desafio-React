import { ProjectCardProps } from './types.ts';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import * as S from './styles.ts';

export const ProjectCard = ({ id, name, budget, category, handleRemove }: ProjectCardProps) => {

	const remove = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		handleRemove(id);
	};

	return(
		<S.ProjectCardContainer>
			<h4>{name}</h4>
			<p>
				<span>Orçamento: </span> R${budget}
			</p>
			<S.CategoryText>
				<S.CategorySpan type={`${category.toLowerCase()}`}></S.CategorySpan> {category}
			</S.CategoryText>
			<S.ProjectCardActions>
				<Link to={`/project/${id}`}>
					<BsPencil /> Editar
				</Link>
				<button onClick={remove}>
					<BsFillTrashFill /> Remover
				</button>
			</S.ProjectCardActions>
		</S.ProjectCardContainer>
	);
}