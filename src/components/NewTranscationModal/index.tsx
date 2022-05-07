import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import closeImg from '../../assets/Vector.svg';



import { Container, TransactionTypeContainer, RadioBox } from './styles';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions()


    // sempre inicializa um estado no formato que ele irá receber os valores
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')

    const [hour, setHour] = useState('')
    const [dataa, setDataa] = useState('')
    const [type, setSytpe] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault() // para não recarregar a pagina após a entrada de dados

        await createTransaction({
            name,
            category,
            type,
            hour,
            dataa
        })

        setName('')
        setCategory('')
        setHour('')
        setDataa('')
        setSytpe('deposit')
        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt="" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder='Nome'
                    value={name}
                    onChange={event => setName(event.target.value)} // esse event sempre retornará o valor em string(texto)
                />

                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)} // esse event sempre retornará o valor em string(texto)
                />

                <input
                    type='time'
                    value={hour}
                    onChange={event => setHour(event.target.value)} // esse event sempre retornará o valor em string(texto)
                />

                <input
                    type='date'
                    value={dataa}
                    required pattern="[0-9]{4}-[0-9]"
                    onChange={event => setDataa(event.target.value)} // esse event sempre retornará o valor em string(texto)
                />



                <button type='submit'>
                    Cadastrar
                </button>
            </Container>


        </Modal>
    )
}