<template>
	<section>
        <header>
            <div class="circle"></div>
            <div class="circles"></div>
            <a href="#" class="logo">Shop<span>ifty</span></a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <p>Sing up</p>
        </header>

        <div class="texts">
            <h1>Online <span>Shop</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.
            </p>
        </div>

        <div class="background_image">
            <img src="./image/bg1.png">
        </div>

        <div class="btn">
            <p class="read">Read More</p>
            <p>Shop Now</p>
        </div>
    </section>




    <!--About Page-->

    <div class="about">
        <div class="box">
            <div class="card">
                <img src="./image/Computer.png">
            </div>
            <div class="card">
                <img src="./image/gift.png">
            </div>
            <div class="card">
                <img src="./image/t-shirt.png">
            </div>
            <div class="card">
                <img src="./image/food.png">
            </div>
            <div class="card">
                <img src="./image/mobile.png">
            </div>
        </div>
        <hr>

        <div class="Clothes">
            <h1>Products</h1>
            <p>----Clothes----</p>
            <div class="clothes_box">
                <div class="clothes_card" v-for="(item, key) in products" :key="key">
                    <img class="img" :src="item.img">
                    <h1>{{ item.title_product }}</h1>
                    <p>
                        {{ item.description }}
                    </p>
                    <a href="#" class="btn">In cart</a>
                </div>
            </div>
        </div>
        <div class="Food">
            <p>----Food----</p>
            <div class="food_box">
                <div class="food_card">
                    <img src="./image/Burger.png">
                    <h1>Food</h1>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old.
                    </p>
                    <a href="#" class="btn">Read More</a>
                </div>

                <div class="food_card">
                    <img src="./image/Hotdog.png">
                    <h1>Food</h1>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old.
                    </p>
                    <a href="#" class="btn">Read More</a>
                </div>

                <div class="food_card">
                    <img src="./image/pizza.png">
                    <h1>Food</h1>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old.
                    </p>
                    <a href="#" class="btn">Read More</a>
                </div>

                <div class="food_card">
                    <img src="./image/sandvich.png">
                    <h1>Food</h1>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old.
                    </p>
                    <a href="#" class="btn">Read More</a>
                </div>
            </div>
        </div>
    </div>




    <!--fotter-->

    <footer class="footer">
        <div class="main">
            <div class="row">
                <div class="footer_col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>

                <div class="footer_col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shiping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>

                <div class="footer_col">
                    <h4>Online</h4>
                    <ul>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">bag</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
                    </ul>
                </div>

                <div class="footer_col">
                    <h4>Follower us</h4>
                    <div class="social">
                        <a href="#"><img src="./image/facebook.png"></a>
                        <a href="#"><img src="./image/Googlell.png"></a>
                        <a href="#"><img src="./image/twitter.png"></a>
                        <a href="#"><img src="./image/instagram.png"></a>
                    </div>               
                        
                    
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import HttpClient from '@/services/http.service'
export default {
	name: "HomePage",
	data() {
		return {
		products: {}
		}
	},
	methods: {
		async getProducts() {
			const {data} = await HttpClient.get('products/get-products')
			this.products = data
            console.log(this.products);
		}
	},
	mounted() {
		this.getProducts()
	},
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

section{
    width: 100%;
    height: 100vh;
}

section header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
}

section header .logo{
    font-size: 30px;
    color: black;
    text-decoration: none;
    font-weight: bold;
    margin: 15px 0;
}

section header .logo span{
    color: #47a681;
}

section header ul{
    list-style: none;
}

section header ul li{
    display: inline-block;
    margin: 5px 5px;
    padding: 5px 20px;
}

section header ul li a{
    color: black;
    text-decoration: none;
}

section header ul li a:hover{
    color: #47a681;
}

section header p{
    cursor: pointer;
    padding: 10px 25px;
    border: 1px solid #47a681;
    border-radius: 30px;
    transition: 0.3s;
}

section header p:hover{
    color: white;
    background: #47a681;
}

.circle{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #47a681;
    clip-path: circle(320px at left -230px);
    z-index: -1;
}
.img {
    width: 200px;
    height: 200px;
}
.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #47a681;
    clip-path: circle(250px at right 800px);
    z-index: -1;
}

section .texts h1{
    position: absolute;
    top: 30%;
    left: 4%;
    font-size: 100px;
    color: #6a6666;
}

section .texts h1 span{
    color: #47a681;
}

section .texts p{
    width: 650px;
    position: absolute;
    top: 50%;
    left: 4%;
    line-height: 26px;
    text-align: justify;
}

section .background_image img{
    width: 750px;
    position: absolute;
    top: 25%;
    left: 47%;
    margin-left: 25px;
}

section .btn{
    position: relative;
    top: 77%;
    left: 38px;
    width: 340px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}


section .btn .read{
    background: #47a681;
    color: white;
    cursor: pointer;
}

section .btn p{
    padding: 10px 25px;
    background: none;
    border: 2px solid #47a681;
    cursor: pointer;
}




.about{
    width: 100%;
    height: 240vh;
    padding: 50px;
}

.about .box{
    width: 100%;
    padding: 60px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.about .box .card{
    width: 170px;
    height: auto;
    padding: 5px 10px;
    margin: 0 15px;
    background: gainsboro;
    border: 1px solid gainsboro;
    cursor: pointer;
    z-index: 1;
    transition: 0.3s;
}

.about .box .card:hover{
    box-shadow: 3px 5px 20px rgba(0,0,0,0.3);
    transform: scale(1.1);
    border-radius: 5px;
}

.about .box .card img{
    width: 150px;
}

.about hr{
    height: 2px;
    background: #d98ca5;
    border-radius: 5px;
    margin: 30px 110px;
}

.about .Clothes h1{
    font-size: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35px 0;
}

.about .Clothes p{
    text-align: center;
    margin: 35px 0;
    color: gray;
    font-size: 25px;
}

.about .clothes_box{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
}

.about .clothes_box .clothes_card{
    background: #9d9d9d;
    width: 350px;
    padding: 25px 25px;
    text-align: center;
    border-radius: 10px;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.about .clothes_box .clothes_card:hover{
    box-shadow: 5px 5px 5px rgba(0,0,0,0.6);
}

.about .Clothes .clothes_box img{
    width: 250px;
    cursor: pointer;
    transition: 0.3s;
}

.about .Clothes .clothes_box img:hover{
    transform: scale(1.1);
}

.about .clothes_box .clothes_card h1{
    font-size: 35px;
    color: gainsboro;
    margin: 15px 0;
}

.about .clothes_box .clothes_card p{
    color: white;
    margin: 25px 0;
    font-size: 17px;
}

.about .clothes_box .clothes_card .btn{
    text-decoration: none;
    color: white;
    padding: 10px 30px;
    background: #47a681;
}

.about .Food p{
    text-align: center;
    margin: 35px 0;
    color: gray;
    font-size: 25px;
}

.about .food_box{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
}

.about .food_box .food_card{
    background: #9d9d9d;
    width: 350px;
    padding: 25px 25px;
    text-align: center;
    border-radius: 10px;
    transition: 0.3s;
}

.about .food_box .food_card:hover{
    box-shadow: 5px 5px 5px rgba(0,0,0,0.6);
}

.about .food_box .food_card img{
    width: 250px;
    cursor: pointer;
    transition: 0.3s;
}

.about .food_box .food_card img:hover{
    transform: scale(1.1);
}

.about .food_box .food_card h1{
    font-size: 35px;
    color: gainsboro;
    margin: 15px 0;
}

.about .food_box .food_card p{
    color: white;
    margin: 25px 0;
    font-size: 17px;
}

.about .food_box .food_card .btn{
    text-decoration: none;
    color: white;
    padding: 10px 30px;
    background: #47a681;
    text-align: center;
    border-radius: 20px;
    transition: 0.3s;
}


.footer{
    background: #24262b;
    padding: 50px;
}

.footer .main{
    max-width: 1170px;
    margin: auto;
}

ul{
    list-style: none;
}

.row{
    display: flex;
    flex-wrap: wrap;
}

.footer_col{
    width: 25%;
    padding: 0 15px;
}

.footer_col h4{
    font-size: 18px;
    color: white;
    text-transform: capitalize;
    margin-bottom: 30px;
    font-weight: 500;
    position: relative;
}

.footer_col h4::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background: #47a681;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
}

.footer_col ul li{
    margin-bottom: 20px;
}

.footer_col ul li a{
    text-decoration: none;
    color: #6d6d6d;
    cursor: pointer;
}

.footer_col .social img{
    width: 20px;
    margin: 5px;
}
</style>