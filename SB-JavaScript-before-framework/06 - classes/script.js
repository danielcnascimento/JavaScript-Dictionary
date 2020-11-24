class SmoothScroll {
  constructor(links) {
    this.linkElement = document.querySelectorAll(links);
    this.addClickEvent(); // << contem event handleClick || << handle event click
  }
  handleClick(event){// << identifica o elemento DOM 'a' e executa eventos a esse elemento || << identify the DOM element 'a' and apply an event for the cliked linked
      event.preventDefault() // << previne que o link 'a' clicado seja chamado de forma padrão. ||
      const href = event.currentTarget.getAttribute('href');// << pega as sessoes vinculadas no atributo 'href' de cada 'a' || << calls the attribute 'href' and its value
      const section = document.querySelector(href);// << select the section using DOM method
      window.scrollTo({// thats how we find the section position and Scroll to that selected section
          top : section.offsetTop - (window.innerHeight - section.clientHeight)/2,// we get (window height - section height) / 2 to let it positioned on middle of the page window
          behavior : 'smooth',//this doesnt work on SAFARI yet !
      });
  }

  addClickEvent() {
    this.linkElement.forEach(link => { // << forEach element, addEventListener("click") will let you execute events in differents elements
      link.addEventListener("click",this.handleClick);// << the event provider is called handleClick, we dont use () because we just call the reference
    });
  }
}

const scrool = new SmoothScroll('a[href^="#"]');// << usando cssSelector, 

console.log(scrool.linkElement);// << retorna array de elementos DOM 'a'
//console.log(scrool.handleClick());
