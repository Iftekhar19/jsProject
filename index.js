// selecter
const table=document.querySelector("#table");
const name=document.querySelector("#name");
const age=document.querySelector("#age");
const dip=document.querySelector("#alert");

let sr=1;
function update(event)
{ 
    event.preventDefault();
    if(name.value!=="" && age.value!=="")
    {
    // if(sr===1)
    // {
    //    let thead=document.createElement("thead");
    //    let tr=document.createElement("tr");
    //    let srhead=document.createElement("th");
    //    let nameHead=document.createElement("th");
    //    let ageHead=document.createElement("th") ;
    //    let actionHead=document.createElement("th");
    //    actionHead.innerText="Action";
    //    srhead.innerText="Sr No";
    //    nameHead.innerText="Name";
    //    ageHead.innerText="Age";
    //    tr.appendChild(srhead);
    //    tr.appendChild(nameHead);
    //    tr.appendChild(ageHead);
    //    tr.appendChild(actionHead);
    //    thead.appendChild(tr);
    //    table.appendChild(thead);
    // //    tr.setAttribute("id",sr);
    // }
   let userName=name.value;
   let userAge=age.value;
   let row=document.createElement("tr");
   let col=document.createElement("td");
   col.innerText=sr;
   let col1=document.createElement("td");
   col1.innerText=userName;
   let col2=document.createElement("td");
   col2.innerText=userAge;
   let col3=document.createElement("td");
   col3.innerHTML=`<td><button class="actBtn"  ><i onclick="remove(event)" id="${sr}" title="remove" class="fa-sharp fa-solid fa-trash"></i></button></td>`;
   row.appendChild(col);
   row.appendChild(col1);
   row.appendChild(col2);
   row.appendChild(col3);
   table.appendChild(row);
   row.setAttribute("id",sr);
   name.value="";
   age.value="";
   dip.style.visibility="visible";
   dip.innerText="record added successfully";
   dip.style.color="lightgreen";
   
 
}
else
{
    dip.style.visibility="visible";
    dip.innerText="please fill the data";
   dip.style.color="red";
  
}
let tremove=document.querySelectorAll("#table>tr");
let count=1;
tremove.forEach((e)=>
{
    e.children[0].innerText=count++;
});
setTimeout(()=>
{
 dip.innerText="";
 dip.style.visibility="hidden";

},3000);
sr++;

}
function remove(event)
{
    let tremove=document.querySelectorAll("#table>tr");
    tremove=Array.from(tremove);
   
    tremove.map((e,ind)=>
    {
        if(e.id===event.target.id)
        {
            let count=1;
           tremove.splice(ind,1);
           e.remove();
           dip.style.visibility="visible";
           dip.innerText="record removed successfully";

           dip.style.color="yellow";
          setTimeout(()=>
            {
            dip.innerText="";
            dip.style.visibility="hidden";

            },3000);
           tremove.map((x)=>
           {
             x.children[0].innerText=count++;
             
           });
           return;
        }
    });

}
