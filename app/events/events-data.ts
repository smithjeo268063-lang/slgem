export type EventStatus = "ongoing" | "upcoming" | "past";

export type EventSpeaker = {
  id: number;
  name: string;
  role: string;
};

export type EventScheduleItem = {
  id: number;
  time: string;
  duration: string;
  category: string;
  title: string;
  location: string;
  speaker?: string;
};

export type EventInfoItem = {
  label: string;
  value: string;
};

export type EventItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  status: EventStatus;
  time: string;
  location: string;
  locationAddress: string;
  attendance: string;
  speakers: EventSpeaker[];
  schedule: EventScheduleItem[];
  essentialInfo: EventInfoItem[];
};

const featuredSpeakers: EventSpeaker[] = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    role: "Chief AI Officer, Zenith Labs",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Founder, Decentralize.io",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Lead Dev, Neural Protocols",
  },
  ...Array.from({ length: 21 }, (_, index) => ({
    id: index + 4,
    name: `Guest Speaker ${index + 1}`,
    role: "Technology & Innovation",
  })),
];

const eventSchedule: EventScheduleItem[] = [
  {
    id: 1,
    time: "09:00 AM",
    duration: "60 MINS",
    category: "KEYNOTE",
    title: "Opening Keynote: The Future of AI",
    location: "Main Auditorium",
    speaker: "Dr. Sarah Jenkins",
  },
  {
    id: 2,
    time: "10:30 AM",
    duration: "90 MINS",
    category: "PANEL",
    title: "Decentralized Network Architecture",
    location: "Room 402B",
    speaker: "Lead Architects Panel",
  },
  {
    id: 3,
    time: "12:30 PM",
    duration: "120 MINS",
    category: "NETWORKING",
    title: "Luncheon & Industry Mixer",
    location: "Sky Lounge Terrace",
  },
];

const eventTime = "09:00 AM - 05:00 PM";
const eventLocation = "Las Vegas Convention Center";
const eventLocationAddress =
  "3150 Paradise Rd, Las Vegas, NV 89109, United States";
const eventAttendance = "450+";

function eventDetails(dateFrom: string, dateTo: string) {
  return {
    time: eventTime,
    location: eventLocation,
    locationAddress: eventLocationAddress,
    attendance: eventAttendance,
    speakers: featuredSpeakers,
    schedule: eventSchedule,
    essentialInfo: [
      { label: "Date", value: `${dateFrom} - ${dateTo}` },
      { label: "Time", value: eventTime },
      { label: "Location", value: eventLocation },
      { label: "Attendance", value: `${eventAttendance} participants` },
    ],
  };
}

export const events: EventItem[] = [
  {
    id: 1,
    image: "/images/events/heritage-building.png",
    title: "Heritage Reimagined: Annual Preservation Forum",
    description:
      "An international gathering of heritage professionals discussing the future of conservation. Includes keynote lectures, restoration showcases, and cultural policy sessions.",
    dateFrom: "March 14, 2026",
    dateTo: "March 16, 2026",
    status: "ongoing",
    ...eventDetails("March 14, 2026", "March 16, 2026"),
  },
  {
    id: 2,
    image: "/images/events/heritage-building.png",
    title: "Heritage Reimagined: Annual Preservation Forum",
    description:
      "An international gathering of heritage professionals discussing the future of conservation. Includes keynote lectures, restoration showcases, and cultural policy sessions.",
    dateFrom: "March 14, 2026",
    dateTo: "March 16, 2026",
    status: "ongoing",
    ...eventDetails("March 14, 2026", "March 16, 2026"),
  },
  {
    id: 3,
    image: "/images/events/heritage-building.png",
    title: "Heritage Reimagined: Annual Preservation Forum",
    description:
      "An international gathering of heritage professionals discussing the future of conservation. Includes keynote lectures, restoration showcases, and cultural policy sessions.",
    dateFrom: "March 14, 2026",
    dateTo: "March 16, 2026",
    status: "ongoing",
    ...eventDetails("March 14, 2026", "March 16, 2026"),
  },
  {
    id: 4,
    image: "/images/events/heritage-building.png",
    title: "Heritage Reimagined: Annual Preservation Forum",
    description:
      "An international gathering of heritage professionals discussing the future of conservation. Includes keynote lectures, restoration showcases, and cultural policy sessions.",
    dateFrom: "March 14, 2026",
    dateTo: "March 16, 2026",
    status: "ongoing",
    ...eventDetails("March 14, 2026", "March 16, 2026"),
  },
];

export function eventSlug(event: Pick<EventItem, "id" | "title">) {
  const titleSlug = event.title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `${titleSlug}-${event.id}`;
}
