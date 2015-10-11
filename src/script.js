
var sections = [].slice.call(document.querySelectorAll('section'),0);
// TODO gather data

// find out which section is in view
var tops = sections.map(function(el) {
  return el.offsetTop;
})

window.addEventListener('resize', function(){
  console.warn("debounce")
  // DEBOUNCE
  tops = sections.map(function(el) {
    return el.offsetTop;
  })
}, false);

window.addEventListener('scroll', function(){
  console.warn("debounce!")
  var top = document.body.scrollTop + (window.innerHeight/2);
  sections.forEach(function(section, i){
    section.classList.toggle('visible', tops[i] < top)

  })
}, false);

sections[0].classList.add('visible')


console.log(tops)
