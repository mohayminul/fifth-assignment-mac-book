//8GB unified memory starts
document.getElementById ("8-gb-memory").addEventListener ('click', function (){
    const laptopBasePrice = document.getElementById ("extra-ram-cost");
    // const laptopBasePrice8gb = laptopBasePrice.innerText;
    const laptopBestPrice8gb = parseInt(laptopBasePrice.innerText);
     
    if (laptopBestPrice8gb==180 ){
        // const laptopExtraMemoryPrice16gb = laptopBestPrice8gb;
        document.getElementById('extra-ram-cost').innerText = 0;
        update8gbMemory ();
    }


})
//8GB unified memory ends

//16GB unified memory starts
document.getElementById ("16-gb-memory").addEventListener ('click', function (){
    const laptopPrice16gb = document.getElementById ("extra-ram-cost");
    const laptopBestPrice16gb = parseInt(laptopPrice16gb.innerText);
    // console.log (laptopBestPrice16gb);
    if (laptopBestPrice16gb<180 ){
        const laptopExtraMemoryPrice16gb = 180;
        document.getElementById('extra-ram-cost').innerText = laptopExtraMemoryPrice16gb;
        // update16gb ();
        update16gbMemory ();
    }

 
})
//16GB unified memory ends

//storage cost computation starts
//256gb ssd
document.getElementById ('256-gb-ssd').addEventListener ('click', function(){
    const ssd256gb = document.getElementById ('extra-rom-cost');
    const ssd256gbCost = ssd256gb.innerText;
    const storageCost256gb = parseInt (ssd256gbCost);
    // console.log (extraMemoryCost);
    if (storageCost256gb!=0 ){
        // const laptopExtraMemoryPrice16gb = laptopBestPrice8gb;
        document.getElementById('extra-rom-cost').innerText = 0;
        update256gb ();
        
    }


})

//512gb ssd
document.getElementById ('512-gb-ssd').addEventListener ('click', function ssd512cost (){
    const ssd512gb = document.getElementById ('extra-rom-cost');
    const ssd512gbcost = parseInt(ssd512gb.innerText);
    // const extraMemoryCost = ssd512gbcost +100;

    // if (ssd512gbcost==0 || ssd512gbcost >100){
        if (ssd512gbcost !=100 ){
        const extraMemoryCost =  100;
        document.getElementById('extra-rom-cost').innerText = extraMemoryCost;
        
        // update512gb (see512gb);
        update512gb();
        // console.log (extraMemoryCost);
    }

})

//1TB ssd
document.getElementById ('1tb-gb-ssd').addEventListener ('click', function(){
    const ssd1TBgb = document.getElementById ('extra-rom-cost');
    const ssd1TBgbcost = parseInt(ssd1TBgb.innerText);
    // const extraMemoryCost =  ssd1TBgbcost + 180;
    // console.log (extraMemoryCost );
    if (ssd1TBgbcost<180){
        const extraMemoryCost = 180;
        document.getElementById('extra-rom-cost').innerText = extraMemoryCost;
        update1TB ();
    }
})

document.getElementById ('free-delivery').addEventListener('click', function(){
    const deliCostFreeInput = document.getElementById ('delivery-charge');
    const deliCostFree = parseInt (deliCostFreeInput.innerText);
    if (deliCostFree>0){
        const freeDeliCost = 0;
        document.getElementById('delivery-charge').innerText = freeDeliCost;
        deliveryFree ();
    }
    const updatedDeliFreeCost = deliCostFree;
    // totalCost ();
})
document.getElementById ('express-delivery').addEventListener('click', function(){
    const deliCostExpressInput = document.getElementById ('delivery-charge');
    const deliCostExpress = parseInt (deliCostExpressInput.innerText);
    if ( deliCostExpress <20 ){
        expressDeliCost = 20;
        document.getElementById('delivery-charge').innerText = 20;
        deliveryExpress ();
        
    }
    const updatedDeliCostExpress = deliCostExpress;
    console.log (updatedDeliCostExpress);
    // totalCost ();
})


// console.log (updated8gbPrice);
function update8gbMemory (){
    const laptopBestPrice8gb = document.getElementById ("extra-ram-cost").innerText;
    console.log (laptopBestPrice8gb);
}

function update16gbMemory (){
    const updatedBestPrice16gb = parseInt (document.getElementById ("extra-ram-cost").innerText);

    console.log (updatedBestPrice16gb);
}

function update256gb (){
    const updatedPrice256gb = document.getElementById('extra-rom-cost').innerText;
    console.log (updatedPrice256gb);
}

function update512gb (){
    
    const updatedPrice512gb = document.getElementById('extra-rom-cost').innerText;
    // ssd512cost ();
    console.log (updatedPrice512gb);
}

function update1TB (){
    const updatedPrice1TB = document.getElementById ("extra-rom-cost").innerText;
    console.log ('',updatedPrice1TB);
}
// const updated8gbPrice = document.getElementById('laptop-price').innerText;
function deliveryFree (){
    const updatedDeliCost = document.getElementById ('delivery-charge').innerText;
    console.log (updatedDeliCost);
 }
 
 function deliveryExpress (){
     const updateDeliExpressCost = document.getElementById ('delivery-charge').innerText;
     
  }



//   updatetotal


const ram8gb = parseInt (document.getElementById ("laptop-price").innerText);
const ram16gb= parseInt (document.getElementById ("extra-ram-cost").innerText);
const rom256gb = parseInt (document.getElementById('extra-rom-cost').innerText);
const rom512gb = parseInt (document.getElementById('extra-rom-cost').innerText);
const rom1TBgb = parseInt (document.getElementById('extra-rom-cost').innerText);
const deliPrime = parseInt (document.getElementById ('delivery-charge').innerText);
const deliExpress = parseInt (document.getElementById ('delivery-charge').innerText);
console.log (deliExpress);



