import React, { createContext, useState } from 'react';
import { CryptoDB, Datum } from '../interfaces/cryptoInterface';
import { useEffect } from 'react';
import cryptoDB from '../api/cryptoDB';

type ListContextProps = {
    list: Datum[];
    loadList: () => Promise<void>;
    loadCryptoById: (id:string) => Promise<Datum>;
}

export const ListContext = createContext({});

export const ListProvider = ({children}: any) => {

    const [list, setList] = useState<Datum[]>([]);

    useEffect(() => {
      loadList();
    }, [])
    

    const loadList = async() => {
        const resp = await cryptoDB.get<CryptoDB>('tickers/?start=1&limit=50');
        setList([...resp.data.data]);
        // setList([...list, ...resp.data.data]);
    }
    const loadCryptoById =  async(id:string) =>{
        throw new Error('Not implemented')
    }
    return(
        <ListContext.Provider value={{
            list,
            loadList,
            loadCryptoById,
        }}>
            { children }
        </ListContext.Provider>
    )
}