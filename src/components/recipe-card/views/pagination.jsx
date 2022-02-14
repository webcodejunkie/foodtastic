import { Pagination } from 'react-bootstrap';

function PaginationView(props) {

  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
    console.log(items);
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
}

export default PaginationView;