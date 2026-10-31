import React from "react";
import { CheckCircle2, AlertTriangle, X } from "lucide-react";

export default function Notification({ notification, onDismiss }) {
    if (!notification) return null;

    const isSuccess = notification.type === 'success';

    return (
        <div className={`notification-banner ${isSuccess ? 'success' : 'error'}`}>
            <div className="notification-content">
                {isSuccess ? <CheckCircle2 size={20} /> : <AlertTriangle size={20} />}
                <div>
                    <strong>{isSuccess ? 'Sucesso!' : 'Atenção'}</strong>
                    <div>{notification.message}</div>
                </div>
            </div>
            <button className="notification-close" onClick={onDismiss} title="Fechar alerta" >
                <X size={18} />
            </button>
        </div>
    );
}