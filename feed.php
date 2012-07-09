<?php

$fileContents = file_get_contents('http://pinterest.com/'.$_GET["u"].'/feed.rss');
$simpleXml = simplexml_load_string($fileContents);
echo json_encode($simpleXml);


