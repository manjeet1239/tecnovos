import React from 'react'
import { Layout, Row, Col } from 'antd';
function List(props) {

    const { items, clickHandler, updateHandler } = props;

    return (
        <div className="list">
            {items ? items.map((i, j) => {
                return (<div>
                    {i.isEdit ? <div><input type="text" value={i.name} name="name" onChange={props.changeHandler} />
                        <button onClick={() => updateHandler(i.id)}>Add</button>
                    </div> : <div key={i.id} className="list-item" onClick={() => clickHandler(i.id)}>{i.name}</div>}
                </div>)

            }) : null}


        </div>
    )
}
export default List;