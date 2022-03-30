import NewMeetupForm from "../component/meetups/NewMeetupForm"
import { useHistory } from 'react-router-dom'


function NewMeetup(){
    const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch('https://react-project-28332-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
       {
           method: 'POST',
           body: JSON.stringify(meetupData),
           headers:{
                'Content-Type': 'application/json'
           },
       }
       ).then(() => {
         history.replace('/');
    });

    }
    return (
        <section>
          <h1>Add NewMeetup</h1>
          <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
        
    )
    
}

export default NewMeetup