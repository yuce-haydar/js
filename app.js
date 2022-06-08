// // console.log(this); // global scopeda oldugumuz icin bize windows nesnesini/metodunu donderir ama  constructor 
// // icinde olsaydik o kapsayiciyi icindekileri dondururdu

// // burda ornek bir obje olusturma 
// // const ornekobje1={
// //     name:"hayydar",
// //     age:25
// // }

// // /******************************************scoope mantigi*******************************************/ 
// // function Yapici_ornek(yas,isim,maas){//constructor olusturma *ilk Harfi buyuk yazilir
// //     this.age=yas;                   //aldigi parametreleri birdegere atadik * ayni isim olmasina gerek yok
// //     this.ad=isim;
// //     this.salary=maas;
// //     this.fonk = () => {console.log(this.age,this.ad,this.salary)};
// // //  !==>  arrow fonksiyon kullanarak this ve scope mantigini anlamaya calistik ve bunlari ekrana yazdirdik bilgilerimizii
// // }
// // const obj= new Yapici_ornek(20,"haydar",3666);   //Yapici ornek sinifimizdan yeni bir nesne turettik  
// // const obj2=new Yapici_ornek(21,"mustafa",3663);
// // obj2.fonk();                                    //nesnemizi ve fonksiyonumu kullandik
// // obj.fonk();


// //// prototype mantigi  objeler arasi kalitim saglama ve her objemizin icinde bir protoype vardir 

// //*********************kalitim mantgi******************************
// function Person(){
//     //bos constructor
// }

// //Personun prototypne fonksiyon ekleme 
// Person.prototype.test1=function(){
//     console.log("test1");
// }
// Person.prototype.test2=function(){
//     console.log("test2");
// }

// //constructor ekleme
// function Employee(ad,no){
//     this.ad=ad;
//     this.no=no;


// }
// //olusturdugumuz employe prototype i persondan aldik yani iksinin prototype ayni oldu o yuzden olusturacagimiz emp nesnesi personun prototypndaki 
// // test 1 ve test 2 fonksiyonalarina erisabilecek
// Employee.prototype= Object.create( Person.prototype);
// const emp=new Employee("haydar",25);
// console.log(emp);
// console.log(emp.ad);
// emp.test1();

// // function Constructor(ad,yas){
// //     this.ad=ad;
// //     this.yas=yas;

// //     this.info=()=>{console.log("gosteriliyor");};
// //     this.toString= function(){
// //         console.log("her ne kadar string e donusturme sansanda bu proto type mantigi")
// //     }
// // }

// // const nesne=new Constructor("haydar",22);
// // console.log(nesne); 

//********************************* */ call apply bind********************************************************

// const obj1={
//     number1:23,
//     number2:22

// };
// const obj2={
//     number1:232,
//     number2:22

// };

// //call apply ve bind scope ve this  kelime karisikliginin onune gecmek icin kullanilan fonksiyonlardir

// function addNumbers(number3,number4){
//     console.log(this.number1+this.number2+number3+number4);
// }
// addNumbers.call(obj1,100,200);//call dedigimiz zaman hangi obje oldugunu soylemelyiz this kelimemizi o objede calistiracaktir
// addNumbers.call(obj2,100,200);

// addNumbers.apply(obj1,[100,200]);//apply call gibidir tek farki verilen degerler dizi halinde verilmelidir 
// addNumbers.apply(obj2,[100,200]);

// const copyfunc1=addNumbers.bind(obj1);//ve bind bize copy fonksiyon uretir o fonksiyonu istedigimiz yerde cagirip kullanabiliriz
// copyfunc1(1,4);


// ********************************es6 oncesi kalitim ve mantik*************************************

// function Person(name,age){
//     this.name=name;
//     this.age=ag;
// }

// Person.prototype.showinfos=function(){
//     console.log("isim"+this.name+"yas"+this.age);
// }

// function Employee(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }
// Employee.prototype=Object.create(Person.prototype);
// Employee.prototype.toString =function(){
//     console.log("benim yazdigim");
// }
// Employee.prototype.showinfos=function(){
//     console.log("ad"+this.name+ "yas"+this.age+"maas"+this.salary);
// }
// const emp=Employee("ali",20,2222);
// console.log(emp);
// emp.showinfos();
// emp.toString();


/*******************************************************es6 sonrasi kalitim sinif ve constructor mantigi ve sugar coding ************************************************************/


class Person{//burda es6 ile clas ve kalitimi isledim yazim faha guzel isler ayni
    constructor(name,age){//bir tane constructor olusturmak sart zaten figerinde de sartti
        this.name=name;
        this.age=age;
    }
    showinfos(){//basit bir fonskyoon
        console.log("isim"+this.name+"yas"+this.age);
    }
}
// Employee.prototype=Object.create(Person.prototype);
class Employee extends Person {//burda kalitim alma islemi 'sinif ismi' extends  'kalitim alaacagin sinifin ismi'
    constructor(name,age,salary){
        super(name,age);//burda super derken aslinda mirasini aldigimiz sinifin constructorunu kastediyoruz super.showinfos da diyebilirzi 
        this.salary=salary;
    }
    showinfos(){//overiding
        console.log("ad"+this.name+ "yas"+this.age+"maas"+this.salary);
    }
    toString(){//overiding
        console.log("benim yazdigim fonksiyon");
    }
    raisesalary(x){
        this.salary+=x;
    }
}
const emp1=new Employee("haydar",23,2828);//turetme
console.log(emp1);
emp1.raisesalary(72);
console.log(emp1);
