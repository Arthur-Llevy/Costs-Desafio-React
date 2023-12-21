import { ChangeEvent } from 'react';

type SelectOptionsType = {
	id: number;
	name: string;
};

type SelectProps = {
	text: string;
	name: string;
	handleOnChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	value: number | string;
	options: SelectOptionsType[]
};

export type { SelectProps };