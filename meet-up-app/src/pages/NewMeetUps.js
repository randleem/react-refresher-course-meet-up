import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetUpsPage() {
  const history = useHistory();

  function handleAdddMeetup(meetupData) {
    fetch(
      "https://react-getting-started-608ec-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <sectionv>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAdddMeetup} />
    </sectionv>
  );
}
export default NewMeetUpsPage;
