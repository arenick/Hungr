"use strict";

const favoritesPage = {
  template: `
  <section class="recipe__container">
    <ul class="recipe__list">
        <li ng-repeat="recipe in $ctrl.favorites track by $index">
          <h1>{{ recipe.label }}</h1>
          <p>{{ recipe.source }}</p>
          <button ng-click="$ctrl.deleteFavorites($index)">Delete</button>
        </li>
    </ul>
  </section>
  `,

  controller: ["FavoritesService", function(FavoritesService) {
    const vm = this;
    vm.favorites = FavoritesService.favorites;
    vm.deleteFavorites = (index) => {
      FavoritesService.deleteFavorites(index);
    }
  }]
}

angular
  .module("App")
  .component("favoritesPage", favoritesPage);