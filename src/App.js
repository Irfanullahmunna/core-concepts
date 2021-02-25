import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak','Jasim', 'Anwar', 'Jafor', 'Alomgir', 'Salman']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Adobe', price: '$10.99'}
  ]
  // const productNames = products.map(product => product.name)
  // console.log(productNames);

  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);


  var person = {
    firstName : "Irfan Ullah",
    lastName : "Munna",
    job: "Student",
  }
  var name = "Irfan Ullah Munna";
  var style = {
    color: "red",
    backgroundColor: "black",
  }

  return (
    <div className="App">
      <header className="App-header">

        

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>

        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(pd => <li>{pd.name}</li>)
          }

          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
        </ul>


        <p className="" style={style}>{person.firstName} {person.lastName} {person.job}</p>
        <p>Full Name: {name}</p>
        <h1>My Heading: {(2+3*2+250)}</h1>
        <p>My first React Paragraph</p>


        {/* <Product name={products[0].name}></Product> */}
        
        {
          products.map(product => <Product product={product}></Product>)
        }

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

        <Person name="Rubel Nayok" job="football"></Person>
        <Person name="Manna Nayok" job="cricket"></Person>
        <Person name="Bappa Nayok" job="volyball"></Person>

        {/*  <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  */}
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    // console.log('clicked');
    // const newCount = count + 1;
    // setCount(newCount);
    setCount(count+1);
  };
  const handleDecrease = () => setCount(count-1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
      {/* <button onClick={ () => setCount(count+1)}>Increase</button> */}
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect( () => {
    // console.log('Calling Effect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
      {/* {
        console.log(users)
      } */}
    </div>
  )
}

function Product(props) {
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  // console.log(name, price)
  return(
    <div style={productStyle}>
      <h3>Name: {name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
    // <div style={productStyle}>
    //   <h3>Name: {props.product.name}</h3>
    //   <h5>{props.product.price}</h5>
    //   <button>Buy Now</button>
    // </div>
  )
}

function Person(props) {
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  return (
  <div style={personStyle}>
    <h1>Name: {props.name} Munna</h1>
    <h3>Learner {props.job}</h3>
  </div>
  // <div style={{border: '2px solid red', margin: '10px'}}>
  //   <h1>Name: Irfan</h1>
  //   <h3>Student</h3>
  // </div>
  )
}

export default App;
