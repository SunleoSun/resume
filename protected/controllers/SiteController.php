<?php

class SiteController extends Controller
{

    public $layout = '//layouts/main';

    public function actionIndex()
    {
        $this->render("resume");
    }
}
