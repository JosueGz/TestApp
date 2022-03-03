import { useEffect, useState } from 'react';
import { CryptoDB, Datum } from '../interfaces/cryptoInterface';
import cryptoDB from '../api/cryptoDB';

export const useCryptos = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [cryptosEnLista,setCryptosEnLista] = useState<Datum[]>([])

    const getCryptos = async () => {
        const resp = await cryptoDB.get<CryptoDB>('/tickers');
        setCryptosEnLista(resp.data.data)
        setIsLoading( false )
        

    }

    useEffect(() => {
		getCryptos();
	}, [])

    return{
        cryptosEnLista,
        isLoading
    }
}
