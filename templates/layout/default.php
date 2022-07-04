<?php
/**
 * @var \App\View\AppView $this
 */
$cakeDescription = 'CakeVue Application';
?>
<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?= $cakeDescription ?>:
        <?= $this->fetch('title') ?>
    </title>
    <?= $this->Html->meta('icon') ?>
<!-- framework style-->
    <?= $this->AssetMix->css('main') ?>
<!-- personal style -->
    <?= $this->AssetMix->css('kemamiw') ?>
<!--vue app -->
    <?= $this->AssetMix->script('app') ?>
<!--personal script-->
    <?= $this->AssetMix->script('main') ?>

    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>
    <?= $this->fetch('script') ?>
</head>
<body>
    <span id="app">

        <app></app>

        <footer></footer>
    </span>
</body>

</html>