import { useState,useEffect} from "react"
import {
    getDocs,
    collection
  } from 'firebase/firestore'
import {db} from "./firebase"

const useMembers = async () => {
    const [members,setMembers] = useState([])

    useEffect(() => {
        const colRef = collection(db,'members')

        const fetchData = async () => {
            try {
                const snapshot =await getDocs(colRef)
                setMembers(snapshot.docs.map(doc => (
                    {...doc.data(),id:doc.id}
                )))
        
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData()
    },[members])

}

export default useMembers