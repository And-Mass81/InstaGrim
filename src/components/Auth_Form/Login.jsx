import { Alert, AlertIcon, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })
    const { loading, error, login } = useLogin()
    return (
        <>
            <Input placeholder='Email' fontSize={14} type='email' value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <Input placeholder='Password' fontSize={14} type='password' value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
            {error && (
                <Alert status='error' fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12} />
                    {error.message}
                </Alert>
            )}
            <Button w={"full"} colorScheme={"cyan"} size={"sm"} fontSize={14}
                isLoading={loading}
                onClick={() => login(inputs)}>
                log in
            </Button>
        </>
    )
}

export default Login