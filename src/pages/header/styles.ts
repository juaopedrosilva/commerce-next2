import styled from 'styled-components'

export const Wrapper = styled.header`
  align-items: center;
  background-color: #FFF;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  position: relative;
 

  & > .about {
    align-items: center;
    display: flex;
    justify-content: space-between;

    > .search-container {
      align-items: center;
      background-color: #F4F4F4;
      border-radius: 50px;
      display: flex;
      margin-right: 1.5rem;
      padding: .5rem 1.25rem;
      width: 300px; 

      > input {
        background-color: transparent;
        border: 0;
        flex: 1;
        margin-right:  1;
        outline: none;
      }
    }
  }
`
