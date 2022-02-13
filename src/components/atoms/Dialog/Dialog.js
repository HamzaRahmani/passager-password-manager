// Third party dependencies
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Atoms
import OverlayBackground from '../OverlayBackground';

const Dialog = styled.div`
    background: white;
    min-width: 20%;
    max-width: 100%;
    min-height: 150px;
    max-height: 100vh;
    border-radius: 10px;
    padding: 20px;

    @media (max-width: 768px) {
        width: calc(100% - 40px);
        max-width: calc(100% - 40px);
        height: calc(100vh - 40px);
    }
`;

const AtomDialog = ({children, onClose}) => {

    const _isDialogBackground = (element) => {
        const isDialogBackground = element.getAttribute('data-isdialogbackground');
        return (isDialogBackground === 'true');
    }

    return <>
        <OverlayBackground data-isdialogbackground="true" onClick={(event) => { 
            if (_isDialogBackground(event.target)) { onClose(); } 
        }}>
            <Dialog>{children}</Dialog>
        </OverlayBackground>
    </>
}

AtomDialog.displayName = 'AtomDialog';
AtomDialog.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
}

export default AtomDialog;