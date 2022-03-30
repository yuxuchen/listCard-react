import MeetupList from '../component/meetups/MeetupList'
import { useState, useEffect} from 'react'

function AllMeetups(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(()=>{
        fetch(
            'https://react-project-28332-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
        ).then((response) => {
            return response.json();
        })
        .then((data) => {
            const meetups = []
            for( const key in data){
                const meetup ={
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup)
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        })
    },[])
    if(isLoading){
        return(
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    return (
      <section>
        <h2>AllMeetups</h2>
        <MeetupList meetups={loadedMeetups} />
      </section>
    )
}

export default AllMeetups