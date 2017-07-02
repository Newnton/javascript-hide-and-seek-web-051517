function getFirstSelector(selector){return document.querySelector(selector)}
function nestedTarget(){return document.getElementsByClassName('target')[0]}
function increaseRankBy(n){let elements = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < elements.length; i++){
     let num = parseInt(elements[i].innerHTML)
     num += n
     elements[i].innerHTML = num.toString()
   }
}
function deepestChild(){return document.querySelector('div#grand-node div div div div')}
