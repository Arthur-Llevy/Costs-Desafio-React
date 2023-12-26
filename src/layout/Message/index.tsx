import * as S from './styles.ts';
import { MessageProps } from './types.ts';
import { useState, useEffect } from 'react';

export const Message = ({ type, msg }: MessageProps) => {

	const [visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		if(!msg){
			setVisible(false);
			return
		};

		setVisible(true);
		const timer: ReturnType<typeof setTimeout>  = setTimeout(() => {
			setVisible(false);
		}, 3000);

		return () => clearTimeout(timer);

	}, [msg])

	return(
		<>
		{visible && 
			(<S.MessageContainer className={`message ${type}`}>{msg}</S.MessageContainer>)			
		}
		</>
	);
}