import './styles.css';
import { Input } from './Input';
import { Select } from './Select/';
import { SubmitButton } from './SubmitButton/';
import { ProjectFormProps, CategoriesType, ProjectType } from './types.ts';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

export const ProjectForm = ({ btnText, handleSubmit, projectData }: ProjectFormProps) => {

	const [categories, setCategories] = useState<CategoriesType[]>([]);
	const [project, setProject] = useState<ProjectType>(projectData! || {});

	useEffect(() => {
		fetch('http://localhost:5000/categories', {
			method: "GET",
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(data => setCategories(data))
		.catch(err => console.log(`Houve um erro ao realizar a consulta: ${err}`));
	}, [])

	const submit = (e: FormEvent): void => {
		e.preventDefault();
		handleSubmit(project);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setProject({...project, [e.target.name]: e.target.value})
	};

	const handleCategory = (e: ChangeEvent<HTMLSelectElement>): void => {
		setProject({...project, category: {
			id: Number(e.target.value),
			name: e.target.options[e.target.selectedIndex].text
		}})
	};


	return(
		<form onSubmit={submit}>			
			<Input 
				type="text"
				text="Nome do projeto"
				name="name"
				placeholder="Insira o nome do projeto"
				handleOnChange={handleChange}
				value={project.name ? project.name : ''}
			/>
			<Input 
				type="number"
				text="Orçamento do projeto"
				name="budget"
				placeholder="Insira o orçamento do projeto"
				handleOnChange={handleChange}
				value={project.budget ? project.budget : ''}
			/>
			<Select 
				name="category_id"
				text="Selecione a categoria"
				options={categories}
				handleOnChange={handleCategory}
				value={project.category ? project.category.id : ''}
			/>
			<SubmitButton text={btnText} />
		</form>
	);
};