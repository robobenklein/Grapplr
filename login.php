<?php
    $connect = mysqli_connect("localhost", "root", "");
    mysqli_select_db($connect, "user");
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";
    if(isset($_POST['email'])){
        $email = mysqli_real_escape_string($connect, $_POST['email']);
        $password = encryptomatic($_POST['password']);
        $query = "SELECT count(*) FROM user.user
                    WHERE email = '$email' AND password = '$password";
        $result = mysqli_query($connect, $query);
        $row = mysqli_fetch_assoc($result);
        echo "row:" . $row;
    }else{
        echo "nothing posted";
    }
              
    function encryptomatic ($input){
        return sha1($input . "you'll_never_get_me_lucky_salts");
    }
              
    
?>
<html>
	<head>
        <title>Log In to Grapplr!</title>
        <link type="text/css" rel="stylesheet" href="css/main.css">
        <link href='http://fonts.googleapis.com/css?family=Raleway:400,200' rel='stylesheet' type='text/css'>
	</head>
	<body>
        <div class="window">
            <div class="header">
                <img src="images/main/grapplr_logo_black.png" />
            </div>
            <form action="login.php" method="POST">
                <input spellcheck="false" name="email" type="text" class="form" placeholder="email" required>
                <input type="password" name="password" class="form" placeholder="password" required>
                <button type="submit" value="login">LOGIN</button>  
            </form>
        </div>
	</body>
</html>
