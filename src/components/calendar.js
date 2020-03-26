/**
 * This component is here to enable dynamic import.
 * Should be dynamic because it uses Element which exists only in browser.
 * Thus, causing build to fail.
 * More on this: https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-window-is-defined
 */

import React from "react";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

const Calendar = props => (
  <FullCalendar plugins={[dayGridPlugin, googleCalendarPlugin]} {...props} />
);

export default Calendar;
