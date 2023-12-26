import * as S from './styles.ts';
import { ServiceCardProps } from './types.ts';
import { BsFillTrashFill } from 'react-icons/bs';
import { MouseEvent } from 'react';

export const ServiceCard = ({ id, name, cost, description, handleRemove }: ServiceCardProps) => {

	const remove = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		handleRemove(id, cost);
	};

	return (
		<S.ProjectCardContainer>
			<h4>{name}</h4>
			<p>
				<span>Custo total: </span> {cost}
			</p>
			<p>{description}</p>
			<S.ProjectCardActions> 
				<button onClick={remove}><BsFillTrashFill />Excluir</button>
			</S.ProjectCardActions>
		</S.ProjectCardContainer>
	);
};