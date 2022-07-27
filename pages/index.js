import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'
import Dashboard from './Dashboard'
import Image from 'next/image'

export default function Home() {
  const { address, connectWallet } = useWeb3()

  return (      

    <Wrapper>  
      <FeatImg></FeatImg>

      {address ? (
        <Dashboard address={address} />
      ) : (
        <WalletConnect>
          <Button onClick={() => connectWallet('injected')}>
            Connect Wallet
          </Button>
          <Details>
            You need Chrome to be
            <br /> able to run this app.
          </Details>  
        </WalletConnect>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  color: white;
  display: grid;
  place-items: center;
`

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.div`
  /* flex: 0; */
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 2.3rem;
  color:white;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #3773f5;
  z-index: 1;

  &:hover {
    background-color: green;
    cursor: pointer;
  }
`
const Details = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: green;
  z-index: 1;
`
const FeatImg = styled.div`
  position: absolute;
  display: block;
  margin:auto;
  background-image:url("https://www.adyl.dev/static/media/coinbase-app.e5bc4674.png");
  background-repeat: no-repeat;
  background-size:contain ; 
  height:100vh;
  width: 100vw;
`