import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

// no header é pra colocar aquilo que vai se repetir em todas as paginas
export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                        Agendar
                </button>
            </Content>
        </Container>
    )
}   