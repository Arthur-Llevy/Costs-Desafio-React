import './styles.css';
import { ProjectForm } from '../../components/ProjectForm/';
import { CreatePostProps } from './types.ts';
import { useNavigate, NavigateFunction } from 'react-router-dom';

export const NewProject = () => {	

	const navigate: NavigateFunction = useNavigate();

	const createPost = (project: CreatePostProps): void => {
		project.costs = 0;
		project.services = [];

		fetch('http://localhost:5000/projects', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(project)
		})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			navigate('/projects',  { state: { message: "Projeto criado com sucesso!" } });
		})
		.catch(err => console.log(`Houve um erro ao realizar a consulta: ${err}`));
	};

	return (
		<div className="newproject-container">
			<h1>Criar projeto</h1>
			<p>Crie seu projeto para depois adicionar os serviços</p>
			<ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
		</div>
	);
};