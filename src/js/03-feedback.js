
import throttle from 'lodash.throttle';

const form = document.querySelector("form.feedback-form");
const storageRawData = localStorage.getItem("feedback-form-state");
const storageData = {
    email: "",
    message: ""
}

if(storageRawData){
    try{
        const parsedData = JSON.parse(storageRawData);
        console.log(`localStorage["feedback-form-state"]`, parsedData);
        Object.keys(storageData).forEach((key) =>{
            const elem = document.querySelector(`[name="${key}"]`);
            storageData[key] = parsedData[key];
            if(elem){
                elem.value = parsedData[key];
            }
        });
    } catch(exc){
        console.warn(exc);
    }
}

function onInput(ev){
    //console.log(ev.target.name, ev.target.value);
    storageData[ev.target.name] = ev.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(storageData));
}

form.addEventListener("input", throttle(onInput, 500));
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    console.log(storageData);
    localStorage.removeItem("feedback-form-state");
    console.log('localStorage["feedback-form-state"] was removed')
});

