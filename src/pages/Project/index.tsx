import * as S from './styles.ts';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProjectType } from './types.ts';
import { Loading } from '../../components/Loading/';
import { Container } from '../../layout/Container/';
import { ProjectForm } from '../../components/ProjectForm/';
import { Message } from '../../layout/Message/';
import { ServiceForm } from '../../components/ServiceForm/';
import { ServiceType } from '../../components/ServiceForm/types.ts';
import { v4 as uuidv4 } from 'uuid';
import { ServiceCard } from '../../components/ServiceCard/';

export const Project = () => {

	const { id } = useParams<string>();
	const [project, setProject] = useState<ProjectType>();
	const [showProjectForm, setShowProjectForm] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');
	const [type, setType] = useState<string>('');
	const [showServiceForm, setShowServiceForm] = useState<boolean>(false);
	const [services, setServices] = useState<ServiceType[]>([]);

	useEffect(() => {
		const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
			fetch(`http://localhost:5000/projects/${id}`, {
				method: "GET",
				headers: { "Content-Type": "application/json" }
			})
			.then(response => response.json())
			.then(data => {
				setProject(data);
				setServices(data.services);
			})
			.catch(err => alert(`Erro ao consultar o projeto: ${err}`))			
		}, 300);

		return () => clearTimeout(timer);

	}, [id]);

	const toggleProjectForm = (): void => {
		setShowProjectForm(!showProjectForm);
	};

	const editPost = (currentProject: ProjectType): boolean | void => {

		setMessage('');

		if(currentProject.budget < currentProject.costs){
			setMessage('O orçamento não pode ser menor do que o custo do projeto');
			setType('error');
			return false
		};

		fetch(`http://localhost:5000/projects/${currentProject.id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(currentProject)
		})
		.then(response => response.json())
		.then(data => {
			setProject(data);
			setShowProjectForm(false);
			setMessage('Projeto atualizado');
			setType('sucess');
		})
		.catch(err => alert(`Ocorreu um erro ao atualizar o projeto: ${err}`))
	};

	const toggleServiceForm = (): void => {
		setShowServiceForm(!showServiceForm);
	};

	const createService = (project: ProjectType): void | boolean => {
		const lastService: ServiceType = project.services[project.services.length -1];

		lastService.id = Number(uuidv4());
		const lastServiceCost: number = lastService.cost;
		const newCost: number = parseFloat(project.costs.toString()) + parseFloat(lastServiceCost.toString());

		if(newCost > parseFloat(project.budget.toString())){
			setMessage('Orçamento ultrapassado, verifique o valor do serviço.');
			setType('error');
			project.services.pop();
			return false;
		};

		project.costs = newCost;
		console.log(project)

		fetch(`http://localhost:5000/projects/${project.id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(project)
		})
		.then(response => response.json())
		.then(() => {
			setShowProjectForm(false);
		})
		.catch(err => alert(`Ocorreu um erro ao adicionar um serviço ao projeto: ${err}`))
	};

	const removeService = (id: number, cost: number): void => {
		if(project){	
			const servicesUpdated: ServiceType[] = project.services.filter(service => {
				return service.id != id;
			});
			
			const projectUpdated: ProjectType = project;
			projectUpdated.services = servicesUpdated;
			projectUpdated.costs = parseFloat((projectUpdated.costs).toString()) - parseFloat(cost.toString());
			console.log(projectUpdated)

			fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
				method: "PATCH",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(projectUpdated)
			})
			.then(response => response.json())
			.then(() => {
				setProject(projectUpdated);
				setServices(servicesUpdated);
				setMessage('Serviço removido com sucesso!');
				setType('sucess');
			})
			.catch(err => alert(`Ocorreu um erro ao adicionar um serviço ao projeto: ${err}`))

		}
	};

	return(
		<>
			{project ? (
				<S.ProjectDetailsContainer>
					<Container customClass="column">
						{message && <Message type={type} msg={message}/>}
						<S.DetailsContainer>
							<h1>{project.name}</h1>
							<S.Button onClick={toggleProjectForm}>
								{!showProjectForm ? "Editar projeto" : "Fechar"}
							</S.Button>
							{!showProjectForm ? (
								<S.ProjectInfo>
									<p>
										<span>Categoria:</span> {project.category.name}
									</p>
									<p>
										<span>Total de orçamento:</span> {project.budget}
									</p>
									<p>
										<span>Total utilizado:</span> {project.costs}
									</p>
								</S.ProjectInfo>
							): (
								<S.ProjectInfo>
									<ProjectForm 
										handleSubmit={editPost}
										btnText="Concluir edição"								
										projectData={project}
									/>
								</S.ProjectInfo>
							)}
						</S.DetailsContainer>					
						<S.ServiceFormContainer>
							<h2>Adicione um serviço ao projeto</h2>
							<S.Button onClick={toggleServiceForm}>
								{!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
							</S.Button>
							<S.ProjectInfo>
								{showServiceForm && (
									<ServiceForm 
										handleSubmit={createService}
										btnText="Adicionar serviço"
										projectData={project}
									/>
								)}
							</S.ProjectInfo>
						</S.ServiceFormContainer>
						<h2>Serviços</h2>
						<Container customClass="start">
							{services.length > 0 ? (
								services.map((service) => (
									<ServiceCard 
										id={service.id}
										name={service.name}
										cost={service.cost}
										description={service.description}
										key={service.id}
										handleRemove={removeService}
									/>
								))
							) : ( 
								<p>Não há serviços.</p>
							)}
						</Container>
					</Container>
				</S.ProjectDetailsContainer>
			): (
				<Loading />
			)}
		</>
	);
};
