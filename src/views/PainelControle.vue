<script>

</script>

<template>
    <main>
        <input type="checkbox" id="check">
<!--header começo-->
 <header>
    <label for="check"> 
        <ion-icon name="menu-outline" id="siderbar"></ion-icon>
    </label>

    <div class="right">
          <a href="#" class="sair_btn">Sair</a>
    </div>
 </header>
<!--header final-->
<!--sidebar começo-->
    <div class="sidebar">
        <div>
            <img src="../assets/img/imagem_inicio.jpeg" class="image" alt="" color>
            <h2>SUA EMPRESA</h2>
        </div>
        
        <a> href="#"><ion-icon name="desktop-outline"></ion-icon><span>Painel</span></a>
        <a> href="#"><ion-icon name="image-outline"></ion-icon><span>Fotos</span></a>
        <a> href="#"><ion-icon name="calendar-clear-outline"></ion-icon><span>Agenda</span></a>
        <a> href="#"><ion-icon name="help-outline"></ion-icon><span>Ajuda</span></a>
        <a> href="#"><ion-icon name="help-circle-outline"></ion-icon><span></span>Info</a>
    </div>
    <!--sidebar final-->
    <div class="content"></div>
    <!-- <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> -->

    </main>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    font-family: 'Open+Sans' , sans-serif;
}

header{
    position: fixed;
    background: rgb(103, 49, 10);;
    padding: 20px;
    width: 100%;
    height: 30px;
}

.sair_btn{
    padding: 10px 15px;
    background: #ffffff;
    text-decoration: none;
    float: right;
    margin-top: -30px;
    margin-right: 40px;
    border-radius: 2px;
    font-size: 15px;
    font-weight: 700;
    color: rgb(0, 0, 0);
    transition: 0.5s;
    transition-property: background;
}
.sair_btn:hover{
    background-color: rgb(168, 166, 166);
}
.sidebar{
    position: fixed;
    width: 250px;
    height: 100%;
    margin-top: 70px;
    padding-top: 30px;
    left: 0;
    background-color:rgb(226, 226, 226);
}
.sidebar .image{
    width: 100px;
    height: 100px;
    border-radius: 100px;
}
.sidebar h2{
    color: rgb(0, 0, 0);
    margin-top: 0;
    margin-bottom: 20px;
}
.sidebar a{
    color: rgb(0, 0, 0);
    display: block;
    width: 100%;
    line-height: 60px;
    text-decoration: none;
    padding-left: 40px;
    box-sizing: border-box;
    transition: 0.5s;
    transition-property: background ;
}
.sidebar a:hover{
    background: rgb(168, 166, 166);
}
.sidebar ion-icon{
    padding-right: 10px;
}
label #siderbar_btn{
    z-index: 1;
    position: fixed;
    left: 300px;
    /*color: darkturquoise;*/
    font-size: 25px;
    margin: 5px 0;
    cursor: pointer;
    transition: 0.5s;
    transition-property: color;
}
label #siderbar_btn:hover{
    color: black;
}
#check:checked ~ .sidebar{
    left: -250px;
-webkit-transition: left 3s;
}
#check:checked ~ .sidebar a span{
    display: none;
}
#check:checked ~ .sidebar a{
    font-size: 20px;
    margin-left: 140px;
    width: 80px;
}
.content{
    background-size: cover;
    background-position: center;
    height: 100vh;
    transition: 0.5s;
   
}
#check:checked ~ .content{
    margin-left: 60px;
}
#check{
    display: none;
}
</style>