import { useLocation } from 'react-router-dom';
import { Message } from '../../layout/Message/'
import * as S from './styles.ts';
import { Container } from '../../layout/Container/';
import { LinkButton } from '../../components/LinkButton/';
import { ProjectCard } from '../../components/ProjectCard';
import { useState, useEffect } from 'react';
import { ProjectType } from './types.ts';
import { Loading } from '../../components/Loading/';

export const Projects = () => {

	const [projects, setProjects] = useState<ProjectType[]>([]);
	const [removeLoading, setRemoveLoading] = useState<boolean>(false);
	const [projectMessage, setProjectMessage] = useState<string>('');

	const location = useLocation();
	let message: string = '';

	if(location.state){
		message = location.state.message;
	};

	const abortController: AbortController = new AbortController();

	useEffect(() => {
		const timeOut: ReturnType<typeof setTimeout> = setTimeout(() => {
			fetch('http://localhost:5000/projects', {
				method: "GET",
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(response => response.json())
			.then(data => {
				setProjects(data)
				setRemoveLoading(true);								
			})
			.catch(err => console.log(`Houve um erro ao realizar a consulta: ${err}`));
		}, 300)

		return () => {
			abortController.abort()
			clearTimeout(timeOut);
		};
	}, []);

	const removeProject = (id: number): void => {
		fetch(`http://localhost:5000/projects/${id}`, {
				method: "DELETE",
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(response => response.json())
			.then(() => {
				setProjects(projects.filter((project) => project.id !== id))
				setProjectMessage('Projeto removido com sucesso!');
			})
			.catch(err => console.log(`Houve um erro ao realizar a exclusão: ${err}`));
	};

	return(
		<S.ProjectCcontainer>
			<S.TitleContainer>
				<h1>Meus pojetos</h1>
				<LinkButton to="/newproject" text="Criar projeto"/>				
			</S.TitleContainer>
			{message && <Message msg={message} type="sucess"/>}
			{projectMessage && <Message msg={projectMessage} type="sucess"/>}
			<Container customClass="start">
				{projects.length > 0 && 
					projects.map(project => (
						<ProjectCard 
							name={project.name}
							id={project.id}
							budget={project.budget}
							category={project.category.name}
							key={project.id}		
							handleRemove={removeProject}
						/>
					))
				}
				{!removeLoading && <Loading />}
				{removeLoading && projects.length === 0 && (
					<p>Não há projetos cadastrados</p>
				)}
			</Container>
		</S.ProjectCcontainer>
	);
}