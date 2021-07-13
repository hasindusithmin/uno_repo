
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lankasale.com | HomePage</title>
    <link rel="shortcut icon" href="https://i.ibb.co/z5SsvhZ/myicon.png" type="image/x-icon">
    <link rel="stylesheet" href="https://k7yufgbtqylpgqsrxz6sfq-on.drv.tw/cctv/clientside/webkit.css">
    <link rel="stylesheet" href="./global.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/validator/13.6.0/validator.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body >

    <!-- login modal start -->

    <div id="id01" class="my-modal">
    <div class="my-modal-content my-card-4 my-animate-zoom" style="max-width:600px">

      <div class="my-center"><br>
        <span onclick="document.getElementById('id01').style.display='none'" class="my-button my-xlarge my-hover-red my-display-topright" title="Close Modal">&times;</span>
        <img src="http://localhost/webio/image/login.png" alt="Avatar" style="width:30%" class="my-circle my-margin-top">
      </div>

      <form class="my-container" method="POST" autocomplete="off" id="log">
        <div class="my-section">
            <label><b>Email</b></label>
            <span id="logmail" class="my-serif my-text-red my-medium"></span>
            <input class="my-input my-border my-margin-bottom" type="text" placeholder="Enter Email" name="logmail" required >
            <label><b>Password</b></label>
            <span id="logpword" class="my-serif my-text-red my-medium"></span>
            <input class="my-input my-border" type="password" placeholder="Enter Password" name="logpword" required>
            <button class="my-button my-block my-green my-section my-padding" type="submit">Login</button>
        </div>
      </form>

      <div class="my-container my-border-top my-padding-16 my-light-grey">
        <button onclick="document.getElementById('id01').style.display='none'" type="button" class="my-button my-red">Cancel</button>
       
      </div>

    </div>
  </div>

    <!-- login model end -->

    <!-- sign in start -->

    <div id="id02" class="my-modal">
    <div class="my-modal-content my-card-4 my-animate-zoom" style="max-width:600px">

      <div class="my-center"><br>
        <span onclick="document.getElementById('id02').style.display='none'" class="my-button my-xlarge my-hover-red my-display-topright" title="Close Modal">&times;</span>
        <img src="http://localhost/webio/image/signin.png" alt="Avatar" style="width:30%" class="my-circle my-margin-top">
      </div>

      <form class="my-container" method="POST" autocomplete="off" id="sign">
        <div class="my-section">

        <label><b>Firstname</b></label>
        <span id="firstname" class="my-serif my-text-red my-medium"></span>
          <input class="my-input my-border my-margin-bottom" type="text" placeholder="Enter Firstname" name="firstname"  required>
          <label><b>Lastname</b></label>
          <span id="lastname" class="my-serif my-text-red my-medium"></span>
          <input class="my-input my-border my-margin-bottom" type="text" placeholder="Enter Lastname" name="lastname">
          <label><b>NIC</b></label>
          <span id="nic" class="my-serif my-text-red my-medium"></span>
          <input class="my-input my-border my-margin-bottom" type="number" placeholder="Enter NIC" name="nic">
          <label><b>City</b></label>
          <span id="city" class="my-serif my-text-red my-medium"></span>
          <input class="my-input my-border my-margin-bottom" type="text" placeholder="Enter City" name="city">
          <label><b>Email</b></label>
          <span id="email" class="my-serif my-text-red my-medium"></span>
          <input class="my-input my-border my-margin-bottom" type="text" placeholder="Enter Email" name="email" required >
          <label><b>PassWord</b></label>
          <span id="password" class="my-serif my-text-red my-small"></span>
          <input class="my-input my-border my-margin-bottom" type="password" placeholder="Enter Storng PassWord" name="password" required max="8">
          <button class="my-button my-block my-green my-section my-padding" type="submit">Sign</button>
        </div>
      </form>

      <div class="my-container my-border-top my-padding-16 my-light-grey">

        <button onclick="document.getElementById('id02').style.display='none'" type="button" class="my-button my-red">Cancel</button>
       
      </div>

    </div>
  </div>

    <!-- sign in end -->

    <!-- container open -->
    <div class="my-panel">
   
    <!-- header open -->
    <div class="my-row-padding my-card-4 my-padding-16">
        <!-- domain -->
        <div class="my-threequarter">
            <span class="my-xlarge my-wide">lankasale.lk</span>&nbsp;&nbsp;<i class="my-xlarge fa fa-car"></i>
        </div>
        <!-- buttons -->
        <div class="my-quarter">
            <!-- register -->
            <div class="my-half my-center">
                <button onclick="document.getElementById('id02').style.display='block'" class="my-button my-green my-large">Register</button>
            </div>
            <!-- login -->
            <div class="my-half my-center">
                <button onclick="document.getElementById('id01').style.display='block'" class="my-button my-green my-large">Login</button>
            </div>
        </div>
    </div>
    <!-- header close -->

    <!-- search bar start -->
    
    <div class="my-card-4 my-margin-top">
        
        <iframe src="http://localhost/webio/search/"   frameborder="0"  width="100%" height="500px"></iframe>
      
    </div>
   

    <!-- search bar end -->


          <div class="my-row-padding my-card-4 my-margin-top my-margin-bottom">
             <a href="http://localhost/webio/carlist/" class="my-button my-block">view car list</a>
          </div>


          <div class="my-row-padding my-card-4  my-center my-padding-16">
            <div class="my-half">
            Copyright &copy; 2021 
            </div>
            <div class="my-half">
           Design By RMHS Bandara
            </div>
    </div>
    
    </div>
    <!-- container close -->

    

    <script type="module" src="./index.js"></script>
</body>
</html>