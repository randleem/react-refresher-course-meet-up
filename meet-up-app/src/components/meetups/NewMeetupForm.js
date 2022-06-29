import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description" />
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
