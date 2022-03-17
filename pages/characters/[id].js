import { useRouter } from "next/router"
import { useEffect } from "react"

const CharacterDetails = ()=> {
    const router = useRouter()

    useEffect(()=>{
        console.log(router.query)
    }, [router.query])

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            Character Details {router.query.id}
        </div>
    )
}

export default CharacterDetails