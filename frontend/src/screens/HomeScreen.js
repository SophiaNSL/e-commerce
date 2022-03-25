import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import { Link } from 'react-router-dom';

const HomeScreen = ({match}) => {

  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const productList = useSelector( state => state.productList);
  const {loading, products,pages, page, error} = productList;


  // eslint-disable-next-line react-hooks/exhaustive-deps
  //  useEffect( async () => {
  //    const {data} = await axios('/api/products');
  //    console.log(data);
  //    setProducts(data);
  // },[]);

  useEffect( () => {
    dispatch(fetchProducts(keyword, pageNumber));
    
  },[dispatch, keyword, pageNumber]);


  return (
    <>
      {!keyword ? <ProductCarousel /> : (<Link to='/' className='btn btn-light'>Go Back</Link>)}
      <h1>Latest products</h1>
      {
        loading? (<Loader />): error? (<Message variant='danger'>{error}</Message>):
        (
          <>
            <Row>
            {
              products.map( product => (
                  <Col  key={product._id} sm={12} md={6} lg={4} xl={3} className='align-items-stretch d-flex'>
                    <Product product={product}/>
                  </Col>
              ))
            }
           </Row>

           <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
        </>
        )
      }
     
    </>
  )
}

export default HomeScreen