import IndexPage from './page-model';

fixture `Index page`
    .page('http://localhost:4000');

const page = new IndexPage();

test('first test', async t => {
    await t.expect(page.counter.innerText).contains('1')
        .click(page.increment)
        .expect(page.counter.innerText).contains('2')
        .click(page.desrement)
        .expect(page.counter.innerText).contains('1');
});
