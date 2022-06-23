import classes from "./MeetupList.module.css";

import React from "react";
import MeetupItem from "./MeetupItem";
function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
