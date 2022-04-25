module.exports = function () {

    return `
    <!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/login.css">
        <script src="js/script.js"></script>
		<script src="js/login.js"></script>
        <title>Login</title>
    </head>
    <body>
       
        <!------------------------------------>
        
        </div>                          
        <section>
            <!--Write your content here-->
            <div id="log"><h1>Login</h1></div>
            <form action="/login" method="POST">
                <input type="text" id="email" class="email" name="email" placeholder="Email address">
                <input type="password" id="password" class="password" name="secret" placeholder="Password">
                <div id="forgot"><a href="">Forgot password?</a></div>
                
                <input id="btn" type="submit" value="Login">
            </form>
        </section>
         
        <!------------------------------------>
        <div id="footer">
            <p>Copyright FCB -Futsal Court Booking&copy;- 2019.</p>
        </div>
    </body>
</html>
 
    `;
}