import * as React from 'react';

export default () => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}