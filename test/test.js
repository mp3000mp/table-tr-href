'use strict';
require('jsdom-global')();
const assert = require('assert');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const TableTrHref = require('../src/TableTrHref');

describe('TableTrHref', function () {
	const $ = cheerio.load(fs.readFileSync(path.resolve(__dirname, 'html/basic.html')));
	describe('#init()', function () {
		it('should wrapp cells content of both tables', function () {
			window.document.body.innerHTML = $.html();
			TableTrHref.init();
			const table1Links = window.document.getElementById('t1').getElementsByTagName('a');
			const table2Links = window.document.getElementById('t2').getElementsByTagName('a');

			assert.deepStrictEqual(table1Links.length,4);
			assert.deepStrictEqual(table2Links.length,4);
			assert.deepStrictEqual(table1Links[0].getAttribute('href'),'https://github.com/mp3000mp/table-tr-href');
			assert.deepStrictEqual(table1Links[0].getAttribute('target'),'');
			assert.deepStrictEqual(table2Links[2].getAttribute('target'),'_blank');
		});
		it('should wrapp cells content of t2 table only', function () {
			window.document.body.innerHTML = $.html();
			TableTrHref.init(window.document.getElementById('t1'));
			const table1Links = window.document.getElementById('t1').getElementsByTagName('a');
			const table2Links = window.document.getElementById('t2').getElementsByTagName('a');

			assert.deepStrictEqual(table1Links.length,4);
			assert.deepStrictEqual(table2Links.length,0);
		});
	});
});
