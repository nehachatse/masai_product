import { Container, SimpleGrid, HStack, Select, Center, Button } from '@chakra-ui/react'
import { useEffect, useReducer, useState } from 'react';
import { getProducts } from './api';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import { productsReducer, initState } from './productsReducer';
import { type } from '@testing-library/user-event/dist/type';
import ProductItem from '../../components/ProductItem';
import ErrorMessage from '../../components/ErrorMessage';

const Products = () => {
  const [ page, setPage ] = useState(1)
  const [ sort, setSort ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [arrPages, setArrPages] = useState([])
  const [ state, dispatch ] = useReducer(productsReducer, initState)
  console.log("State =", state)

  useEffect(() => {
    dispatch({type: "LOADING", loading: true})
    
    getProducts(page, sort, filter)
    .then(data => {
      dispatch({type: "LOADING", loading: false})
      dispatch({type: "SUCCESS", res:data.data})
      let totalPage = data.data.totalPages
      let tempArr = []
      for(let i=1; i<=totalPage; i++)
        tempArr.push(i)
      setArrPages(tempArr)
    })
    .catch(error => {
      dispatch({type: "LOADING", loading: false})
      dispatch({type: "ERROR", error: true})
    })
  },[page, sort, filter])

  return (
    <>{
      state.error ? <ErrorMessage/> :
      (state.loading ? <LoadingSkeleton/> :
      (<Container data-cy="products" maxW="container.xl">
        <HStack spacing="50px" my={4}>
        <Select name='sort' w={'40%'} onChange={(e) => setSort(e.target.value)}>
          <option value=''>Sort by price: Order</option>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </Select>

        <Select name='filter' onChange={(e) => setFilter(e.target.value)}>
          <option value=''>Filter by: Order</option>
          <option value='men'>Men</option>
          <option value='women'>Women</option>
          <option value='kids'>Kids</option>
          <option value='homedecor'>Home Decor</option>
        </Select>
        </HStack>

        <Center my={4}>{arrPages.map(ele => 
          <Button onClick={()=>setPage(ele)} bg={'tomato'} color={'white'} border={'none'} mr={'4'} p={5} borderRadius={4} w={'30px'}>{ele}</Button>)}</Center>
        <SimpleGrid
          data-cy="products-container"
          columns={3}
          spacing={8}
          m={6}
        >
          {state.res.data && state.res.data.map((ele) => <ProductItem key={ele.id} product={ele}/>)}
        </SimpleGrid>
      </Container>))}
    </>
    );
};

export default Products;
