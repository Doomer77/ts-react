import React, {FC, useRef, useState} from "react";

const EventsExample:FC = () => {

    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler =  (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler =  (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHahdler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag');
    }

    const overHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('DRAG');
    }

    return(
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder='Управляемый'/>
            <input type="text" ref={inputRef} placeholder='Не управляемый'/>
            <button onClick={clickHandler}>Press me</button>
            <div onDrag={dragHahdler} draggable style={{width: '200px', height: '200px', background: 'orangered'}}></div>
            <div onDrop={dropHandler}
                 onDragLeave={leaveHandler}
                 style={{width: '200px', height: '200px', background: isDrag ? 'blue' : 'green', marginTop: '10px'}}
                 onDragOver={overHandler}
            >
            </div>
        </div>
    )
}

export default EventsExample;