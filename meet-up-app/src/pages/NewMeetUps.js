import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpsPage() {
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
    );
  }

  return (
    <sectionv>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAdddMeetup} />
    </sectionv>
  );
}
export default NewMeetUpsPage;
