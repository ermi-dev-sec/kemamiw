<template>
<nav class="uk-navbar-container uk-box-shadow-medium" uk-navbar>
    <h3 class="uk-align-left uk-margin-left ">ቀ ማ ሚ ው</h3>
    <div class="uk-navbar-center">

        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li>
                <a href="#">Parent</a>
                <div class="uk-navbar-dropdown uk-box-shadow-medium">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
</nav>
</template>