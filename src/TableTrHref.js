'use strict';
require('./TableTrHref.scss');

const tthClass = 'tth';
const dataHref = 'data-href';
const dataTarget = 'data-target';

/**
 * launches init once
 * @constructor
 */
function TableTrHref () {

	/**
	 * Finds all tr[data-href] and wrap <td> contents in a <a> tag
	 * Possibility to set data-target with valid target attribute value
	 * @param DOMElement
	 */
	this.init = (DOMElement) => {
		DOMElement = DOMElement || document;
		const trList = DOMElement.querySelectorAll('tr[data-href]');
		trList.forEach(function (tr) {
			const url = tr.getAttribute(dataHref);
			tr.removeAttribute(dataHref);
			const target = tr.getAttribute(dataTarget) || '';
			tr.removeAttribute(dataTarget);
			tr.classList.add(tthClass);
			const tdList = tr.children;
			for (const td of tdList) {
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
