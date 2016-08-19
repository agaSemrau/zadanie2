<?php

require('vendor/autoload.php');

$loader = new Twig_Loader_Filesystem('templates');
$twig = new Twig_Environment($loader, array('cache' => false));
$pageName = !empty($_GET['page']) && preg_match('/^[a-zA-Z]+$/', $_GET['page']) ? $_GET['page'] : 'index';
$template = $twig->loadTemplate("$pageName.twig");
echo $template->render(json_decode(file_get_contents('data.json'), true));

