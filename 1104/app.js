//부가세 출력 함수

function Product(name, price){
    this.name = name;
    this.price = price;
    this.부가세 = function(){
        console.log(this.price*0.1);
    }
}