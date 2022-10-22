
const athletics = document.getElementById('athletics')
const athleticsValue = athletics.getAttribute('value')
//change attribute value based on choice.
function mychoice(){
    var mt1Dropdown = document.getElementById("maid-types-1");
    currentOption = mt1Dropdown.options[mt1Dropdown.selectedIndex].value;

    switch(d){
        case select:
            break;
        case lolita:
            athleticsValue -=1;
            break;
        case sexy:
            break;
        case pure:
            break;
        case cool:
            break;
        case boyish:
            athleticsValue +=1;
            break;
        case heroine:
            break;
    }
    athletics.setAttribute(athleticsValue);
}