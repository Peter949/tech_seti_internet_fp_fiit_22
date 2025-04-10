import React, { PureComponent } from 'react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Input } from '../components/Input'

class Home extends PureComponent {

    render() {
        return (
            <Container>
                <div>
                    <Button color="secondary" size="large" title="Подтвердить" />
                    <Button color="secondary" size="large" title="Удалить" />
                    <Text size="large" weight="bold" color="primary">
                        Hello
                    </Text>
                    <br/>
                    <Input size="medium" color="primary" placeholder="Input"/>
                </div>
            </Container>




            //<div className='h-190'>
            //    <p>Home page</p>
                
            //</div>
        )
    }
}

export default Home