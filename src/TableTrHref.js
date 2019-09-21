require('./TableTrHref.scss');

let tthClass = 'tth';
let dataHref = 'data-href';
let dataTarget = 'data-target';

/**
 * launches init once
 * @constructor
 */
function TableTrHref() {

  /**
   * Finds all tr[data-href] adn wrap td contents in a
   * Possibility to set data-target with valid target attribute value
   * @param DOMElement
   */
  this.init = (DOMElement) => {
    DOMElement = DOMElement || document;
    let trList = DOMElement.querySelectorAll('tr[data-href]');
    console.log(trList)
    trList.forEach(function(tr){
      let url = tr.getAttribute(dataHref);
      tr.removeAttribute(dataHref);
      let target = tr.getAttribute(dataTarget);
      tr.removeAttribute(dataTarget);
      tr.classList.add(tthClass);
      let tdList = tr.children;
      for(let td of tdList){
        td.innerHTML = '<a href="' + url + '"' + (target !== null ? ' target="' + target + '"' : '') + '>' + td.innerHTML + '</a>';
      }
    })
  }
  this.init();
}

window.TableTrHref = new TableTrHref(); // todo virer

module.exports = new TableTrHref();
