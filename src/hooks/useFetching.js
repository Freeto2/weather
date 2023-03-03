import { useState } from "react"

export const useFetching = (callback) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const response = async () => {
        try {
            setLoading(true)
            await callback()
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }


    return [response, loading, error]
}