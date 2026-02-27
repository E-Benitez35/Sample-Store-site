"use strict"
//Display Available Stock
var Litem = [
    {
        "option" : "Item1",
        "tag" : "2"
    },

    {
        "option" : "Item2",
        "tag" : "4"
    },

    {
        "option" : "Item3",
        "tag" : "8"
    },

    {
        "option" : "Item4",
        "tag" : "10"
    },

    {
        "option" : "Item5",
        "tag" : "1"
    },

    {
        "option" : "Item6",
        "tag" : "2"
    },

    {
        "option" : "Item7",
        "tag" : "3"
    },

    {
        "option" : "Item8",
        "tag" : "4"
    }

]; 

//Options
const OptionsFill = document.getElementById("Calculator");

//Function will append items from table above to html page in format below
Litem.forEach((item, index) =>
{
    var fill = document.createElement("div");

    fill.innerHTML = `<h1> ${item.option} </h1>
    <p> $${item.tag}</p>
    <input type = "number" min = "0" id = "qty${index}" oninput="Subtotal(), Quantity()">`; //oninput allows for live changes

    //Fill form out with following info from table above this js file
    OptionsFill.appendChild(fill);
}    
)

//Function will display subtotal prior to final payment
function Subtotal()
{
    //variable keeps track of subtotal
    let subtotal = 0;

    //get quatity and price calculations
    Litem.forEach((item, index) =>
    {
        const qty = parseInt(document.getElementById(`qty${index}`).value) || 0;
        subtotal += qty * item.tag;
    });
    //display subtotal on screen in live time when making changes
    document.getElementById("sub").textContent = subtotal.toFixed(2);
}
//Function will display 
function Quantity()
{
    //variable keeps track of subtotal
    let items = 0;

    //get quatity and price calculations
    Litem.forEach((item, index) =>
    {
        const qty = parseInt(document.getElementById(`qty${index}`).value) || 0;
        items += qty;
    });
    //display subtotal on screen in live time when making changes
    document.getElementById("items").textContent = items;
}
//Function will calculate total of items purchased by user
function buy()
{
    //gets total(after tax)
    let total = 0;
    //gets subtotal(before tax)
    let subtotal = 0;
    //local tax
    const tax = 0.0825;
    //Display item name
    const ItemInfo = [];

    Litem.forEach((item, index) =>
    {
        //Gets quantity
        const qty = parseInt(document.getElementById(`qty${index}`).value) || 0;
        //collects total calculating quantity and price tag of item
        total += qty * item.tag;
        //Make sure only selected items are displayed
        if(qty > 0)
        {
            //Count number of item lines for final display
            const count = ItemInfo.filter(Boolean).length + 1;
            //push item name and price into ItemInfo display array in this format
            ItemInfo.push(`${count}-${item.option} (${qty}): $${item.tag}\n`);
        }
    });

    subtotal += total;
    //gets total with taxes when paying
    total += total * tax;
    //.join("") will help format display on ItemInfo array by eliminating the commas
    alert(`${ItemInfo.join("")}\nSubTotal (Before taxes): $${subtotal.toFixed(2)}\nYour total (After taxes): $${total.toFixed(2)}`);
}