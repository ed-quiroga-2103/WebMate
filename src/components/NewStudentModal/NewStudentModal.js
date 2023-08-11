import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

const NewStudentModal = ({ onClose }) => {
    const [code, setCode] = useState(uuidv4());

    const [link, setLink] = useState(
        `http://localhost:3000/register?code=${code}`
    );

    const generateQRCodeImage = () => {
        return QRCode.toDataURL(code, { type: 'png' }).then((img) => {
            setQr(img);
            console.log(img);
        });
    };

    const [qr, setQr] = useState();

    useEffect(() => {
        generateQRCodeImage();
    });

    useEffect(() => {
        setLink(`http://localhost:3000/register?code=${code}`);
    }, [code]);

    const onRefresh = () => {
        setCode(uuidv4());
    };

    const onCopy = () => {
        navigator.clipboard.writeText(link);
    };

    return (
        <div className="student-modal">
            <div className="header">
                <h1>Generar un Nuevo Codigo de Estudiante</h1>
                <span>
                    A continuacion podra generar un nuevo codigo de estudiante.
                </span>
                <span>
                    Puede copiar y pegar el enlace, o compartir el codigo QR
                    para que el estudiante pueda registrar su cuenta nueva. Este
                    codigo no tiene expiracion, pero es de un solo uso.
                </span>
                <span>
                    No es posible volver a generar el mismo codigo, por lo que
                    se recomienda no cerrar esta pantalla hasta guardar el
                    enlace
                </span>
            </div>
            <div className="content-row">
                <div className="link-container">
                    <h3>Enlace:</h3>
                    <span className="student-link">{link}</span>
                    <button className="modal-button" onClick={onCopy}>
                        Copiar
                    </button>
                </div>
                <img src={qr} alt="Problema con el codigo QR" />
            </div>
            <div className="buttons-row">
                <button className="modal-button" onClick={onRefresh}>
                    Refrescar
                </button>{' '}
                <button className="modal-button" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default NewStudentModal;
