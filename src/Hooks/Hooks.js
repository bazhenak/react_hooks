import React, {useCallback, useMemo, useState} from "react";

const UseHooks = () => {
    const [counter, setCounter] = useState(0);
    const [isOpened, setIsOpened] = useState(false);

    const handleClick = useCallback(() => {
        setCounter(() => counter + 1);
    }, [counter]);

    return (
        <div>
            <p>Страница для работы с хуками оптимизации</p>
            <div>
                <p>Счетчик - {counter}</p>
                <button onClick={handleClick}>
                    Увеличить счетчик
                </button>
                <button onClick={() => setIsOpened(!isOpened)}>
                    {isOpened ? 'Закрыть' : 'Открыть'}
                </button>
                {isOpened && <div>Hello</div>}
            </div>
        </div>
    );

};

export default UseHooks;
