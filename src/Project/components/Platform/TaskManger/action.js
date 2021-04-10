export function addKeys(key){
  const newlist = {};
  newlist[key] = [];
  let currentList = JSON.parse(localStorage.getItem('data') ? localStorage.getItem('data') : null);
  const newArray  = {...currentList,...newlist}
  localStorage.setItem('data', JSON.stringify(newArray));
}

export function getKeysArray(){
  let currentList = JSON.parse(localStorage.getItem('data') ? localStorage.getItem('data') : null);
  return currentList != null ? Object.keys(currentList) : [];
}

export function deletKey(key){
  let currentList = JSON.parse(localStorage.getItem('data') ? localStorage.getItem('data') : null);
  const newObj = {...currentList};
  delete newObj[key];
  localStorage.setItem('data', JSON.stringify(newObj));
}

export function addCard(obj,key){
  let currentList = JSON.parse(localStorage.getItem('data') ? localStorage.getItem('data') : null);
  const arr = currentList != null ? Object.keys(currentList) : [];
  for (const value of arr){
    if(value === key){
        currentList[key].push(obj);
    }
  }
  localStorage.setItem('data', JSON.stringify(currentList));
}

export function getKeysData(){
  let currentList = JSON.parse(localStorage.getItem('data') ? localStorage.getItem('data') : null);
  return currentList != null ? currentList : {};
}