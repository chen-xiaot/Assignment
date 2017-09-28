const test = require('tape');
const match = require('./word-match');

test('word-match first test', t => {
	const count = match('Java', 'JAVA');
	t.equal( count, 4 );
	t.end();
});