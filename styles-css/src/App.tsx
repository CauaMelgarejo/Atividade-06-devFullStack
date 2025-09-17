import ProductCard from './component/ProductCard/ProductCard';
import '../src/styles/global.css'
import Navbar from './component/NavBar/NavBar';
function App() {
  const products = [
    { id: 1, title: 'Camisa Vintage Longa Demais Para Testar o Ellipsis', price: 'R$ 75,00', rating: 4.5, tag: 'Novo', imageUrl: 'https://placehold.co/300' },
    { id: 2, title: 'Calça Jeans Slim', price: 'R$ 120,50', rating: 5.0, tag: 'Promo', imageUrl: 'https://placehold.co/300' },
    { id: 3, title: 'Tênis de Corrida Leve', price: 'R$ 250,00', rating: 4.8, tag: "Novo", imageUrl: 'https://placehold.co/300' },
    { id: 4, title: 'Tênis de Corrida Adidas', price: 'R$ 290,00', rating: 4.7, tag: "Novo", imageUrl: 'https://placehold.co/300' },
    { id: 5, title: 'Bola de futebol', price: 'R$ 50,00', rating: 3.8, tag: "Novo", imageUrl: 'https://placehold.co/300' },
    { id: 6, title: 'Camisa Brasil', price: 'R$ 250,00', rating: 5.0, tag: "Sem estoque", imageUrl: 'https://placehold.co/300' },
  ];

  return (
    <>
    <Navbar></Navbar>
    <div className="app-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          price={product.price}
          rating={product.rating}
          tag={product.tag}
        />
      ))}
    </div>
    </>
  )
}

export default App
