import * as S from '../ProjectForm/styles.ts';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Input }  from '../ProjectForm/Input/';
import { SubmitButton }  from '../ProjectForm/SubmitButton/';
import { ServiceFormProps, ServiceType } from './types.ts';

export const ServiceForm = ({ handleSubmit, btnText, projectData }: ServiceFormProps) => {

	const [service, setService] = useState<ServiceType>({
		name: "",
		cost: 0,
		description: "",
		id: 0
	});

	const submit = (e: FormEvent): void => {
		e.preventDefault();
		projectData.services.push(service);
		handleSubmit(projectData);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setService({ ...service, [e.target.name]: e.target.value })
	};

	return (
		<S.FormContainer onSubmit={submit}>
			<Input
				type="text"
				text="Nome do serviço"
				name="name"
				placeholder="Insira o nome do serviço"
				handleOnChange={handleChange}
			/>
			<Input
				type="number"
				text="Custo do serviço"
				name="cost"
				placeholder="Insira o valor total"
				handleOnChange={handleChange}
			/>
			 <Input
				type="text"
				text="Descrição do serviço"
				name="description"
				placeholder="Descreva o serviço"
				handleOnChange={handleChange}
			/>
			<SubmitButton text={btnText} />
		</S.FormContainer>
	);
}