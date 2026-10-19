export type Department = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export const departments: Department[] = [
  {
    id: 1,
    image: "/images/mission/the_event.jpg",
    title: "Evangelism & Outreach",
    description:
      "We take the gospel into local communities through open-air meetings, personal evangelism, and rural missions, reaching people wherever they are.",
  },
  {
    id: 2,
    image: "/images/mission/the_mission.jpg",
    title: "Discipleship & Teaching",
    description:
      "We help people grow in faith through biblical teaching, prayer, and ongoing discipleship rooted in the message of Jesus Christ.",
  },
  {
    id: 3,
    image: "/images/mission/the_why.jpg",
    title: "Prayer & Intercession",
    description:
      "We gather in prayer for individuals, communities, and mission efforts, seeking wisdom, strength, and hope for those we serve.",
  },
  {
    id: 4,
    image: "/images/mission/growth.jpg",
    title: "Media & Communications",
    description:
      "We share ministry stories and teaching across platforms, helping the gospel reach people in more places and making outreach visible to our community.",
  },
];

export const departmentSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
