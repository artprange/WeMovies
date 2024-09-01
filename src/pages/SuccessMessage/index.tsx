import { NavLink, useLocation } from 'react-router-dom'

import success from '../../assets/images/sucess.svg'
import { BackToHomeButton } from '../../components/BackToHomeButton'
import { SuccessContainer, SuccessContent } from './styles'
import { useEffect, useState } from 'react'
import { LoaderSpinner } from '../../components/LoaderSpinner/loader'

export function SuccessMessage() {
  const location = useLocation()
  const state = location.state as { checkoutComplete?: boolean }
  const [loading, setLoading] = useState(true)

  // simulando o processamento de pagamento e inserindo um timeout
  useEffect(() => {
    const transactionTimer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(transactionTimer)
  }, [])

  if (loading) {
    return <LoaderSpinner />
  }

  return (
    <SuccessContainer>
      <SuccessContent>
        {state?.checkoutComplete ? (
          <>
            <p>Compra realizada com sucesso!</p>
            <img src={success} alt="Checkout Success" />
            <NavLink to="/">
              <BackToHomeButton>Voltar</BackToHomeButton>
            </NavLink>
          </>
        ) : (
          <p>Nenhuma mensagem para exibir.</p>
        )}
      </SuccessContent>
    </SuccessContainer>
  )
}
