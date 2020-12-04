import React from 'react';
import styled from 'styled-components';
import CoffeeCards from "./CoffeeCards";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  //justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 17%;
  margin-right: 17%;
`

const CoffeeWrapper = (props) => {
    return (
        <Wrapper>
            <CoffeeCards/>
        </Wrapper>
    )


}

export default CoffeeWrapper