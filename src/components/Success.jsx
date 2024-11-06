import React from "react";
import successImage from "../assets/success.png";


export const Success = ({ count }) => {
    return (
        <div className="container">


            <div className="success-block">
                <img className="imageSuccess" src={successImage} alt="success" />
                <h3>Успешно!</h3>
                <p>Всем {count} пользователям отправлено приглашение.</p>
                <button onClick={() => window.location.reload()} className="send-invite">Назад</button>
            </div>
        </div>
    )
}