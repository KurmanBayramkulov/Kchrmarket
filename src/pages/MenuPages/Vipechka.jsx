const Vipechka = () => {
const products = [
  {
    name: 'iPhone',
    price: 1000,
    weight: '190г',
  },
  {
    name: 'iPad',
    price: 500,
    weight: '190г',
  },
  {
    name: 'MacBook',
    price: 2000,
    weight: '190г',
  },
]

    return (
    <div>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.weight}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    )
}

export default Vipechka;