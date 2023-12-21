import { ChangeEvent } from 'react';

type InputProps = {
	type: string;
	text: string;
	name: string;
	placeholder: string;
	handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value?: string | number;
};

export type { InputProps };