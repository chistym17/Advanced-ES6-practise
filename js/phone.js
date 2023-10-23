const loadphone= async(searchedItem)=>{

const response=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchedItem}`)
const data= await response.json();
const phones=data.data
displayPhones(phones)

}

// `https://openapi.programming-hero.com/api/phones?search=${searchedItem}`

const displayPhones=phones=>{

const phoneContainer=document.getElementById('phone-container');

phoneContainer.textContent='';

const show_all_btn=document.getElementById('show-all')

if (phones.length>12 )show_all_btn.classList.remove('hidden')
else show_all_btn.classList.add('hidden')

phones=phones.slice(0,12)

phones.forEach(phone => {
    

const phoneCard=document.createElement('div');

phoneCard.classList="card w-96 bg-base-100 shadow-xl";

phoneCard.innerHTML=`
  <figure><img src="${phone.image}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <div class="card-actions justify-end">
      <button onclick="show_details('${phone.slug}')" class="btn btn-primary">show Details</button>
    </div>
  </div>

`
phoneContainer.appendChild(phoneCard);



});

loading_spinner(false)
}

const search=()=>{
loading_spinner(true)

const searchPhone=document.getElementById('search-input').value

loadphone(searchPhone)


}

const loading_spinner=(status)=>{
const loadingBtn=document.getElementById('loading')
if(status)
        loadingBtn.classList.remove('hidden')
else
        loadingBtn.classList.add('hidden')

}


const show_details=(id)=>
{


load_each_phone_detail(id)


}


const load_each_phone_detail=async(id)=>
{

const response=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)

const data= await response.json();
const phone=data.data

show_each_phone_detail(phone)


}

const show_each_phone_detail=(phone)=>
{
show_phone.showModal()




}
