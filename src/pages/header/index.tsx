import Image from 'next/image'

import { Wrapper } from './styles'

export default function Header() {
  return (
    <Wrapper>
      <Image
        src={'/store.svg'}
        className="logo"
        alt="Logo"
        width="100"
        height="50"
      />
      <div className="about">
        <div className="search-container">
          <input type="text" placeholder="Procurando por algo específico?" />
          <Image src={'/search.svg'} alt="Search" width="25" height="25" />
        </div>
        <Image src={'/cart.svg'} alt="Cart" width="30" height="30" />
      </div>
    </Wrapper>
  )
}
