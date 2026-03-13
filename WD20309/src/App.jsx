import Product from "./component/Product"
import Button from "./component/Button";
import ToDoList from "./component/ToDoList";
import Title from "./component/Title";

function App() {
  const data = {
    name: "Chuột không dây Logitech M331",
    price: 350000,
    category: "Phụ kiện máy tính",
    inStock: true,
    image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1671853906962-RV08WWNIS1LTNE453MOX/Artboard%2B2.jpg?format=750w"
  }
  const products = [
    {
      name: "Chuột không dây Logitech M331",
      price: 350000,
      category: "Phụ kiện máy tính",
      inStock: true,
      image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1671853906962-RV08WWNIS1LTNE453MOX/Artboard%2B2.jpg?format=750w"
    },
    {
      name: "Bàn phím cơ Keychron K6",
      price: 1900000,
      category: "Phụ kiện máy tính",
      inStock: false,
      image: "https://atinproduction.com/wp-content/uploads/2021/07/AWP01220-scaled-1280x1920.jpg"
    },
    {
      name: "Tai nghe Bluetooth Sony WH-CH520",
      price: 1450000,
      category: "Âm thanh",
      inStock: true,
      image: "https://pos.nvncdn.com/86c7ad-50310/art/artCT/20240923_KuFQeVTu.png"
    }
  ];


  return (
    <>
      <Button/>
      <hr />
      <ToDoList/>

      <hr />
      <Title/>

      {/* <Product 
        name={data.name} 
        price={data.price}
        category={data.category}
        inStock={data.inStock}
        image={data.image}
        /> */}

        {/* <div className="d-flex">

        {
          products.map((item,index)=>{ 
            return (
              <Product 
                key={index}
                name={item.name} 
                price={item.price}
                category={item.category}
                inStock={item.inStock}
                image={item.image}
              />
            )
          })
        }
          
        </div> */}

    </>
  )
}

export default App