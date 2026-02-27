"Use strict"

var item = [
    {
        "option" : "Item1",
        "tag" : "Description"
    },

    {
        "option" : "Item2",
        "tag" : "Description"
    },

    {
        "option" : "Item3",
        "tag" : "Description"
    },

    {
        "option" : "Item4",
        "tag" : "Description"
    },

    {
        "option" : "Item5",
        "tag" : "Description"
    },

    {
        "option" : "Item6",
        "tag" : "Description"
    },

    {
        "option" : "Item7",
        "tag" : "Description"
    },

    {
        "option" : "Item8",
        "tag" : "Description"
    }

]; 

//Options
const OptionsFill = document.getElementById("Variety");

item.forEach(item =>
{
    //Create div for displaying array in HTML
    const fill = document.createElement("div");
    //fill.className will assign Name to fill div variable
    fill.className = "Item";

    //Create div for displaying inner part of card display
    const innerfill = document.createElement("div");
    //fill.className will assign Name to fill div variable
    innerfill.className = "Inner";

    //front
    const front = document.createElement("div");
    front.className = "Front";
    //Format Items from array to HTML
    front.innerHTML = `<h1> ${item.option} </h1>
    <p> ${item.tag}</p>`;

    //back
    const back = document.createElement("div");
    back.className = "Back";
    //Format Items from array to HTML
    back.innerHTML = `<img src="Images/Image.png" alt="Image" id="Image" />`;

    //Append Items from arrayu to HTML
    innerfill.appendChild(front);
    innerfill.appendChild(back);
    fill.appendChild(innerfill);
    OptionsFill.appendChild(fill);

    //only used when wanting to flip object on click instead of hover
    //fill.addEventListener("click", () =>
    //{
        //fill.classList.toggle('flipped');
    //});
}    
);