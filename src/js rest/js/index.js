let myHttp = new XMLHttpRequest()
myHttp.open(" GET",    "https://forkify-api.herokuapp.com/api/search?q=pizza");
myHttp.send();
myHttp.responseType="json"


myHttp.addEventListener("load", function(){

        
        console.log(myHttp.response)
        
})              


// var productNameInput=document.getElementById("productName");
// var productPriceInput=document.getElementById("productPrice");
// var productDescrptiontInput=document.getElementById("productDescription");
// var productCategoryInput=document.getElementById("productCategory");

// var searchInput=document.getElementById("searchin");

// var productImageInput=document.getElementById("productImage");

// var inputAdd= document.getElementById('add');

// var inputUpdate= document.getElementById('update');



// var currentIndex  = 0; 

// var products=[];






// if( localStorage.getItem ("productcontainer") !==null ){

//     products=JSON.parse(localStorage.getItem ("productcontainer"));
//     display() 
// }

// function addproduct(){
//         var product={
//             Name:productNameInput.value,
//             price:productPriceInput.value,
//             Desc:productDescrptiontInput.value,
//             cat:productCategoryInput.value,
//             img:productImageInput.files[0] ? `img/${productImageInput.files[0]?.name}`:  `img/2.jpg`  ,
            
//         }
    
            
//         products.push(product); 


//     localStorage.setItem("productcontainer" ,JSON.stringify(products)  )
//         display()
        

//         clear()
// }


// function clear(){
//     productNameInput.value=null;
//     productPriceInput.value=null;
//     productDescrptiontInput.value=null;
//     productCategoryInput.value=null;
// }

// function display(){
//         var cartona="";
//         for( var i =0 ; i< products.length;i++ ){

//             cartona+=`
            
//                 <div class="col-sm-3"> 


//               <div class="card">
//                 <img class="card-img-top" src="${products[i].img}" alt="Title" />
//                 <div class="card-body">
//                   <span>Index:${i}</span>
//                   <h6 class="card-title">productName: ${products[i].Name}</h6>
//                   <p class="card-text">productPrice:${products[i].price}</p>
//                   <p class="card-text">productCategory:${products[i].Desc}</p>
//                   <p class="card-text">productDescription:${products[i].cat}</p>
                 
//                 </div>

//                 <div class="card-footer text-center">
//                     <button onclick="deleteItem(${i})" class="btn btn-sm btn-outline-danger">Delete</button>
//                     <button onclick="updateInfo(${i})" class="btn btn-outline-warning btn-sm">Update</button>
//                 </div>
//                 </div>
              
//           </div>
//             `

//             document.getElementById("rowData").innerHTML=cartona
//         }
                
// }

// function deleteItem(index){
    
// products.splice(  index   , 1   )
// display()

// localStorage.setItem("productcontainer" ,JSON.stringify(products)  )
// }



// function searchItem(){

//    var term =searchInput.value

//    var cartona="";

//    for( var i =0 ; i< products.length;i++ ){

//         if( products[i].Name.toLowerCase().includes( term.toLowerCase() ) ){
//             cartona+=`
//             <div class="col-sm-3"> 
//           <div class="card">
//             <img class="card-img-top" src="img/images (1).png" alt="Title" />
//             <div class="card-body">
//               <span>Index:${i}</span>
//               <h6 class="card-title">productName: ${products[i].Name}</h6>
//               <p class="card-text">productPrice:${products[i].price}</p>
//               <p class="card-text">productCategory:${products[i].Desc}</p>
//               <p class="card-text">productDescription:${products[i].cat}</p>
             
//             </div>
 
//             <div class="card-footer text-center">
//                 <button onclick="deleteItem(${i})" class="btn btn-sm btn-outline-danger">Delete</button>
//                 <button class="btn btn-outline-warning btn-sm">Update</button>
//             </div>
//             </div>
          
//       </div>
//         `

//         }
       
//         document.getElementById("rowData").innerHTML=cartona
//    }
   
// }

// function updateInfo(index){

//   currentIndex = index
//   productNameInput.value= products[index].Name
//   productPriceInput.value=products[index].price
//   productDescrptiontInput.value= products[index].Desc
//   productCategoryInput.value= products[index].cat

//   inputAdd.classList.add('d-none');
//   inputUpdate.classList.remove('d-none')

// }


// function updateItem(){
//   var product={
//     Name:productNameInput.value,
//     price:productPriceInput.value,
//     Desc:productDescrptiontInput.value,
//     cat:productCategoryInput.value,
//     img:productImageInput.files[0] ? `img/${productImageInput.files[0]?.name}`:  `img/2.jpg`  , 
// };  

// products.splice( currentIndex , 1  , product   ); 


// localStorage.setItem("productcontainer" ,JSON.stringify(products)  )

// display()
// clear()
// }








// function sayhallo(userName="userSystem" ,userAge=20  ,  userSalary=2000){
// console.log(`hallo${userName} yourage ${userAge} `   );


// }


// let nums =[10,20,3,40,26]
// let newNums=nums.filter((item)=>{return item >20})
// let newNums = nums.map(function(items){return `${item}`});
// let newNums =nums.redus(function(prev,current){return item})






// let human ={
//         isLive:true,
//         eat:function(){
//             console.log("eat");
            
//         }


// }




// let user ={
//     fullName:"ahmad"
// }




// Object.setPrototypeOf(user, human)

// console.log(human);






        // function user(userName,userAge) {


//             this.Name = userName;
//             this.Age= userAge;
//         }


// let user1= new user("ahmed",30)

// console.log(user1.Name);



