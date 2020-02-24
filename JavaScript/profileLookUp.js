var flag = 0;
var contacts = [
    {
        "name": "Asibul",
        "number": "01767191651",
        "varsity": "university of Rajshahi"
    },
    {
        "name": "asis pal",
        "number": "0176545511",
        "varsity": "vu"   
    },
    {
        "name": "kamol",
        "number": "545451211",
        "varsity": "vuku of Rajshahi"
    },
    {
        "name": "alamin",
        "number": "54854",
        "varsity": "university of fisheries"
    }
];
function lookUpProperty(name,prop)
{
    for(var i = 0;i< contacts.length;i++)
    {
        if(contacts[i].name == name){
            console.log("contact found \n Contact name:"+ name);
            if(contacts[i].hasOwnProperty(prop))
            {
                console.log(""+prop+": "+ contacts[i][prop]);
            }
            else{
                console.log("property not found");
            }
        }
        else{
            flag++;
        }
        
    }
    if(flag == contacts.length)
    {
        console.log("contact not found");
    }
}
lookUpProperty("Asibul","number");
