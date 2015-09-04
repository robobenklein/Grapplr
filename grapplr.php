
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="css/search.css">
        <link type="text/css" rel="stylesheet" href="css/@media.css">
        <link href='http://fonts.googleapis.com/css?family=Raleway:400,200' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet' type='text/css'>
        <script src="js/jquery-1.11.3.min.js"></script>
        <script src="js/typed.js"></script>
        <script src="js/annyang.min.js"></script>
        <script src="js/jquery.autocorrect-1.0.js"></script>
        <script src="js/spellcheck.js"></script>
		<title>Grapplr</title>
	</head>
	<body>
        <div class="dots"></div>
        <div class="toolbar">
            <div class="left_tools">
                <button><img src="images/apps.png"></button>
            </div>
            <div class="right_tools">
                <button><img src="images/settings.png"></button>
              <div id="clock"></div>
            </div>
        </div>
        <div class="grappl">
            <div class="loadbox">
            </div>
            <input type="text" spellcheck="false" name="query" id="query" placeholder="start typing something..." autofocus x-webkit-speech/>
            <div class="controls" id="controls">
                <div id="load"></div>
                <button id="sb" onclick="search()"><img src="images/sd.png" /></button>
                <button id="dl" onclick="download()"><img src="images/dl.png" /></button>
                <button id="dl" onclick="download()"><img src="images/ul.png" /></button>
                <button id="play" onclick="play()"><img src="images/play.png" /></button>
                <button id="tweet" onclick="tweet()"><img src="images/tweet.png" /></button>
                <button id="fbpost" onclick="post()"><img src="images/fbpost.png" /></button>
                <button id="df" onclick="define()"><img src="images/define.png" /></button>
                <button id="q" onclick="ask()"><img src="images/q.png" /></button>
                <button id="nav" onclick="nav()"><img src="images/nav.png" /></button>
                <button id="trans" onclick="translate()"><img src="images/trans.png" /></button>
                <button id="calc" onclick="calculate()"><img src="images/calc.png" /></button>
                <button id="plot" onclick="plot()"><img src="images/plot.png" /></button>
                <button id="gcl"><img src="images/gcl.png" /></button>
            </div>
        </div>
        <div class="speechBox">
        </div>
	</body>
    <grapplrEngine>
        <script language="javascript" type="text/javascript" src="js/grapplrEngine/grapplrEngineMain.js"></script>
        <script language="javascript" type="text/javascript" src="js/grapplrEngine/gcl.js"></script>
        <script language="javascript" type="text/javascript" src="js/grapplrEngine/functions/nav.js"></script>
        <script language="javascript" type="text/javascript" src="js/grapplrEngine/functions/search.js"></script>
        <script language="javascript" type="text/javascript" src="js/grapplrEngine/functions/download.js"></script>
        <script language="javascript" type="text/javascript" src="js/grapplrEngine/functions/ask.js"></script>
        <script language="javascript" type="text/javascript" src="js/grapplrEngine/functions/speech.js"></script>
        <script language="javascript" type="text/javascript" src="js/grapplrEngine/functions/tweet.js"></script>
        <script language="javascript" type="text/javascript" src="js/grapplrEngine/functions/define.js"></script>
        <script language="javascript" type="text/javascript" src="js/grapplrEngine/functions/calculate.js"></script>
        <script language="javascript" type="text/javascript" src="js/grapplrEngine/functions/plot.js"></script>
    </grapplrEngine>
</html>