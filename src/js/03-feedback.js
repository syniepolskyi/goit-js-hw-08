
import throttle from 'lodash.throttle';

const form = document.querySelector("form.feedback-form");


function readStorage(){
  const storageRawData = localStorage.getItem("feedback-form-state");
  const storageData = {
      email: "",
      message: ""
  };
  if(storageRawData){
      try{
          const parsedData = JSON.parse(storageRawData);
          Object.keys(storageData).forEach((key) =>{
              storageData[key] = parsedData[key];
          });
      } catch(exc){
          console.warn(exc);
      }
  }
  return storageData;
}

function writeStorageValues(){
  const storageData = readStorage();
  Object.keys(storageData).forEach((key) =>{
      const elem = document.querySelector(`[name="${key}"]`);
      if(elem){
          elem.value = storageData[key];
      }
  });
}

function validate(form){
    const elements = form.elements;
    const storageData = readStorage();
    const allFilled = Object.keys(storageData).reduce((acc, key) => {
      const isEmpty = (elements[key].value.trim() === '');
      elements[key].classList.toggle('error',isEmpty);
      return ( acc && (!isEmpty) );
    }, true);
    return allFilled;
}

function validateElem(elem){
    const isEmpty = (elem.value.trim() === '');
    elem.classList.toggle('error',isEmpty);
    return !isEmpty;
}

function onInput(ev){
    //console.log(ev.target.name, ev.target.value);
    const storageData = readStorage();
    storageData[ev.target.name] = ev.target.value;
    if(validateElem(ev.target)){
      localStorage.setItem("feedback-form-state", JSON.stringify(storageData));
    }
}

writeStorageValues();

form.addEventListener("input", throttle(onInput, 500));
form.addEventListener("submit", (ev) => {
    const storageData = readStorage();
    ev.preventDefault();
    if(!validate(ev.currentTarget)){
      return ;
    }
    console.log(storageData);
    localStorage.removeItem("feedback-form-state");
    console.log('localStorage["feedback-form-state"] was removed')
});

