import React from 'react'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'
import InProduct from '../Components/InProduct/InProduct'
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  return (
    <div>
      <InProduct id={id}/>
      <RelatedProduct />
    </div>
  );
}

export default Product