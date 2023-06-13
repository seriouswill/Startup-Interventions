document.addEventListener('DOMContentLoaded', function() {
    var toggleSections = document.getElementsByClassName('toggle-section');
  
    for (var i = 0; i < toggleSections.length; i++) {
      toggleSections[i].addEventListener('click', function() {
        var sectionContent = this.parentNode.nextElementSibling;
  
        if (sectionContent.style.display === 'none') {
          sectionContent.style.display = 'block';
        } else {
          sectionContent.style.display = 'none';
        }
      });
    }
  });
  