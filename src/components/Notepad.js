import React, {useState} from 'react';
import {useAddTextMutation, useDelTextMutation, useGetAllFetchQuery} from "../store/authApi";


function Notepad(props) {

    const [state, setState] = useState({inputText: '', param: 0, fil: 0});
    const [addText, {isError}] = useAddTextMutation();
    const {data, isLoading} = useGetAllFetchQuery(state.param);
    const [del, {isDelete}] = useDelTextMutation();


    async function addHendler(evt) {
        evt.preventDefault();
        await addText({text: state.inputText}).unwrap();
        setState({...state, inputText: ''})
    }

    async function dellHendler(_id) {
        console.log('del')
        await del({delit: _id}).unwrap();
    }

    async function filter(evt) {
        evt.preventDefault();
        setState({...state, param: state.fil})
    }


    return (
        <div>
            <form onSubmit={(evt) => addHendler(evt)}>
                <input value={state.inputText} onInput={(evt) => setState({...state, inputText: evt.target.value})}/>
                <button>Отправить</button>
            </form>
            <form onSubmit={(evt) => filter(evt)}>
                <input onInput={(evt) => setState({...state, fil: evt.target.value})}/>
                <button>Фильтр</button>
            </form>

            {
                !isLoading && data.notes.slice(0).reverse().map((item) =>
                    <p>id {item._id}, text {item.text}, day : {item.data.slice(0, 10)}, time: {item.data.slice(11, 19)}
                        <button onClick={() => dellHendler(item._id)}>dell</button>
                    </p>)
            }
        </div>
    );
}

export default Notepad;