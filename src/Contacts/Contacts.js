import React, {useEffect, useState} from "react";
import './Contacts.css'

const Contacts = () => {

    const [dataFromApi, setDataFromApi] = useState(null);

    const [isLoaded, setIsLoaded] = useState(false);

    const [userName, setUserName] = useState('');

    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        console.log(isLoaded);

    }, [isLoaded]);

    const fetchData = (data) => {
        fetch('https://jsonplaceholder.typicode.com/posts/21', {
            method: "PUT",
            body: JSON.stringify(
                {
                    title: data,
                    body: 'body',
                }),
        }).then((data) => data.json())
            .then((res) => {
                setDataFromApi(res.id);
                setIsLoaded(true);
            })

    };

    const onChangeOurInput = (e) => {
        if (e.target.value.length > 3) {
            setUserName(e.target.value);
            fetchData(e.target.value);
        }
    };

    const deleteUser = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${dataFromApi}`, {
           method: 'DELETE',
        }).then(() => setIsDeleted(true))
    };

    return (
        <div className='contacts-page-container'>
            <p className='contacts-page-container__head-text'></p>
            <div>
                <p>Введите ваше имя:</p>
                <input type='text' onChange={(e) => onChangeOurInput(e)}></input>
            </div>
            <div>
                {isLoaded ? <p>Ваш ID:</p> : <p>Ваш ID еще не загружен</p>}
                {isLoaded && <p>ID - {dataFromApi}</p>}
            </div>
            {isLoaded && (
                <div>
                    <button onClick={() => deleteUser()}>
                        {isDeleted
                            ? "Пользователь удален"
                            : `Удалить пользователя - ${userName}`}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Contacts;


