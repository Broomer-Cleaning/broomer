import React, { useState } from "react";
import Modal  from "react-modal";
import Datetime from "react-datetime";


const Addjob = (isOpen, onClose, onEventAdded) => {

    const [title, setTitle] =  useState("");
    const [description, setDescription] = useState("")
    const [start, setStart] =  useState(new Date());
    const [end, setEnd] =  useState(new Date());
    const onSubmit = (event) => {
        event.perventDefault();
        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }
    
return (  

    <Modal isOpen={isOpen} onRequestClose={onClose}>
    <fomr onSubmit={onSubmit}>
    <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>

    <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>

    <div>
        <label>Start Date</label>
    <Datetime value={start} onChange={date => setStart(date)}/>
    </div>

    <div>
        <label>End Date</label>
    <Datetime value={end} onChange={date => setEnd(date)}/>
    </div>

    <button type="submit">Add event</button>


    </fomr>
</Modal>


)    
}

export default Addjob