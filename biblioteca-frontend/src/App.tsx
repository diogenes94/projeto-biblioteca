import React, { useState } from "react";
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import AutoresView from './components/AutoresView';
import ClientesView from './components/ClientesView';


export default function App() {
    const [telaAtiva, setTelaAtiva] = useState('autores');

    const [notification, setNotification] = useState(null);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
    }

    return (
        <div className="container">
            <Navbar telaAtiva={telaAtiva} setTelaAtiva={setTelaAtiva} />
            <Notification notification={notification} onDismiss={() => setNotification(null)} />

            <main className="main-area">
                {telaAtiva === 'autores' && <AutoresView showNotification={showNotification} />}
                {telaAtiva === 'clientes' && <ClientesView showNotification={showNotification} />}
            </main>
        </div>
    )
}
