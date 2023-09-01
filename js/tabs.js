$(document).ready(function() {
    // Cacher tous les contenus d'onglets sauf le premier
    $('.tab-pane').not(':first').hide();
  
    // Gérer le clic sur les liens d'onglet
    $('.tab-link').click(function(e) {
      e.preventDefault();
  
      // Masquer tous les contenus d'onglets
      $('.tab-pane').hide();
  
      // Afficher le contenu d'onglet correspondant à l'attribut href
      $($(this).attr('href')).show();
    });
  });