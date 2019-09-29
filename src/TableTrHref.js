'use strict';
require('./TableTrHref.scss');

const tthClass = 'tth';
const dataHref = 'data-href';
const dataTarget = 'data-target';

/**
 * @constructor
 */
function TableTrHref () {

	/**
	 * Finds all tr[data-href] and wrap <td> contents in a <a> tag
	 * Possibility to set data-target with a valid target attribute value
	 * @param DOMElement
	 */
	this.init = (DOMElement) => {
		DOMElement = DOMElement || document;
		const trList = DOMElement.querySelectorAll('tr[data-href]');
		trList.forEach(function (tr) {
			let url = tr.getAttribute(dataHref);
			tr.removeAttribute(dataHref);
			let target = tr.getAttribute(dataTarget) || '';
			tr.removeAttribute(dataTarget);
			tr.classList.add(tthClass);
			let tdList = tr.children;
			for (let td of tdList) {
				td.innerHTML = `<a href="${url}" target="${target}">${td.innerHTML}</a>`;
			}
		});
	};
}

const oTableTrHref = new TableTrHref();
module.exports = oTableTrHref;
if (typeof window !== 'undefined') {
	window.TableTrHref = oTableTrHref;
}
