import React , {useState}from 'react';
import style from './TaskManager.module.scss';
import cross from '../../../public/svgfonts/cross.svg';
import circle from '../../../public/svgfonts/circle.svg';
import {addKeys,getKeysArray,deletKey,addCard,getKeysData} from './action';

const TaskManager = () =>{
    const [isModalOpen,setModal] = useState(false);
    const [projectList,setProjectList] = useState(getKeysArray());
    const [submit,setSubmitData] = useState('')
    const [isCardOpen,setIsCardOpen] = useState(false);
    const [cardData,setCardData] = useState({});
    const [id,setId] = useState('');
    const [allData,setallData] = useState(getKeysData());

    const setData = (e) =>{
    setSubmitData(e.target.value);
   }

    const openAddModal = () =>{
            return(
                <>
                {isModalOpen && <div className={style.overlay} onClick={closeModal}>
                </div>}
                <div className = {style.modal}>
                    <label for="fname">Title:</label>
                    <input type="text" id="title" name="fname" onChange = {setData}/>
                    <button onClick = {setModalState}>Submit</button>
                </div>
                </>
            )
    }

    const cardClose = () =>{
        setIsCardOpen(!isCardOpen);
    }

    const setTitle = (e) =>{
        const newObj = {title:e.target.value};
        const obj = {...cardData,...newObj}
        setCardData(obj);
    }

    const setDescritption = (e) =>{
        const newObj = {des:e.target.value};
        const obj = {...cardData,...newObj}
        setCardData(obj);
    }

    const CardOpen = () =>{
        return(
            <>
            {isCardOpen && <div className={style.overlay} onClick={cardClose}>
            </div>}
            <div className = {style.cardModal}>
                <label for="fname">List Name:</label>
                <input type="text" id="des" name="des" onChange = {setTitle}/>
                <textarea onChange = {setDescritption}/>
                <button onClick = {setCardDataMethod}>Submit</button>
            </div>
            </>
        )
    }
  
    const setCardDataMethod = () =>{
        addCard(cardData,id);
        const obj = {...allData};
        for (const val of projectList){
            if(val === id){
                console.log(obj,id,obj[id]);
                obj[id].push(cardData);
            }
        }
        setallData(obj);
        setIsCardOpen(!isCardOpen);
    }

    const setModalState = () =>{
        if(!projectList.includes(submit)){
            const obj = {...allData};
            obj[submit] = []
            setallData(obj);
            setProjectList([...projectList,submit]);
            addKeys(submit);
        }
        setModal(!isModalOpen);
    }

    const closeModal  = () =>{
        setModal(!isModalOpen);   
    }

    const onDragOver = (event) => {
	    event.preventDefault();
    }

    const onDrop = (event,id) => {
        let list = JSON.parse(event.dataTransfer.getData("item"));
        const {item,key} = list;
        const obj = {...allData};
        for (const val of projectList){
            if(val === key){
               for(var j = 0 ; j < obj[key].length ; j++){
                if (JSON.stringify(obj[key][j]) === JSON.stringify(item)) { 
                    obj[key].splice(j, 1); 
                }
               }
            }
        }
        for (const val of projectList){
            if(val === id){
                obj[id].unshift(item);
            }
        }
        localStorage.setItem('data',JSON.stringify((obj)));
        setallData(obj);
    }

    const addCardList = (id) => {
        setId(id);
        setIsCardOpen(!isCardOpen);  
    };

    const onDragStart =(event,item,key) =>{
        const obj = {
            item,key
        }
        event.dataTransfer.setData("item", JSON.stringify(obj));
    }

    const deletList = (data) =>{
        const arr = [...projectList];
        for(var i = 0 ; i< arr.length ; i++){
            if(arr[i]===data){
                arr.splice(i, 1); 
            }
        }
        const obj = {...allData};
        delete obj[data];
        setallData(obj);
        setProjectList(arr);
        deletKey(data);
    }

    const deleteCard = (item,data) => {
        const obj = {...allData};
        for(const value of Object.keys(obj)){
                if(value === data){
                    for(var j = 0 ; j < obj[data].length ; j++){
                        if (JSON.stringify(obj[data][j]) === JSON.stringify(item)) { 
                            obj[data].splice(j, 1); 
                        }
                       }
                }
        }
        localStorage.setItem('data',JSON.stringify((obj)));
        setallData(obj);
    }

    const renderListOfProject = () =>{
        return projectList.length && projectList.map((data,index)=>{
            return(
                <div className = {style.border} key = {`list_${data}`} onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, data)}}>
                    <div className = {style.headerTop}>
                   <span>{data}</span>
                        <div onClick = {()=>{deletList(data)}}><img src = {cross} alt = 'cross'></img></div>
                    </div>
                    {data && allData[data] && allData[data].length > 0 && allData[data].map((item,i)=>{
                        return(
                            <div className = {style.cardTop} draggable onDragStart = {(e) => onDragStart(e, item,data)}>
                            <div className = {style.name}>
                             <span>{item.title}</span>
                                <div onClick = {()=>{deleteCard(item,data)}} className = {style.cross}><img src = {cross} alt = 'cross'></img></div>
                            </div>
                        <div className = {style.des}>{item.des}</div>
                            </div>
                        );
                    })
                    }
                    <div className = {style.icon} onClick = {() =>{addCardList(data)}} id = {data}><img src = {circle} alt = 'circle'></img></div>
                </div>
            );
        })
    }

   

    return(
        <div>
           <h1 className = {style.header}>Project Management</h1>
           <div className = {style.button}><button onClick = {closeModal}>Add List</button></div>
           {isModalOpen && openAddModal()}
           <div className = {style.top}>
           {projectList.length > 0 && renderListOfProject()}
           </div>
           {projectList.length === 0 && <div className = {style.null}>You can add List from Add List Button</div>}
           {isCardOpen && CardOpen()}
        </div>
    );  
}

export default TaskManager;