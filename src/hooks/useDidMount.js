import { useEffect } from 'react'

const useDidMount = func => useEffect(() => func && func(), [])

export default useDidMount
