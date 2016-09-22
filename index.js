const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', {}, 'Chocolate'),
        React.createElement('li', {}, 'Vanilla'),
        React.createElement('li', {}, 'Banana')
      ]
    );

  const title = React.createElement('h1', {}, 'My First React Code');
  const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');
  const container = React.createElement('div', {}, [title, paragraph]);



ReactDOM.render(list, document.getElementById('main'));

ReactDOM.render(
  container,
  document.getElementById('main')
);
