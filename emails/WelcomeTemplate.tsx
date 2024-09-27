import React from 'react'
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text>Hello {name}</Text>
            <Link href="https://amirghari.com">
              Big man is coding, Hopefully he can kick some ass soon!!
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate
