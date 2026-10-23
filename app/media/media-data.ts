export type MediaItem = {
  id: number;
  slug?: string;
  title: string;
  description: string;
  image: string;
  embed_url?: string;
};

export const teachingSermons: MediaItem[] = [
  {
    id: 1,
    title: "The Gospel Must Keep Moving",
    description:
      "This department focuses on direct soulwinning activities through: Evangelistic outreaches Open-air crusades Revival gatherings Community missions Rural evangelism The goal is simple: To reach people where they are and introduce them to the saving power of Jesus Christ. We believe no territory is too dark for the light of the gospel.",
    image: "/images/mission/the_event.jpg",
  },
  {
    id: 2,
    title: "Growing Through Discipleship",
    description:
      "This department focuses on direct soulwinning activities through: Evangelistic outreaches Open-air crusades Revival gatherings Community missions Rural evangelism The goal is simple: To reach people where they are and introduce them to the saving power of Jesus Christ. We believe no territory is too dark for the light of the gospel.",
    image: "/images/mission/the_event.jpg",
  },
  {
    id: 3,
    title: "The Harvest Is Plentiful",
    description:
      "This department focuses on direct soulwinning activities through: Evangelistic outreaches Open-air crusades Revival gatherings Community missions Rural evangelism The goal is simple: To reach people where they are and introduce them to the saving power of Jesus Christ. We believe no territory is too dark for the light of the gospel.",
    image: "/images/mission/the_event.jpg",
  },
];

export const photoExcerpts: MediaItem[] = [
  {
    id: 1,
    title: "Enugu Event",
    description:
      "This department focuses on direct soulwinning activities through: Evangelistic outreaches Open-air crusades Revival gatherings Community missions Rural evangelism The goal is simple: To reach people where they are and introduce them to the saving power of Jesus Christ. We believe no territory is too dark for the light of the gospel.",
    image: "/images/media/experts.png",
  },
  {
    id: 2,
    title: "Enugu Event",
    description:
      "This department focuses on direct soulwinning activities through: Evangelistic outreaches Open-air crusades Revival gatherings Community missions Rural evangelism The goal is simple: To reach people where they are and introduce them to the saving power of Jesus Christ. We believe no territory is too dark for the light of the gospel.",
    image: "/images/media/experts.png",
  },
  {
    id: 3,
    title: "Enugu Event",
    description:
      "This department focuses on direct soulwinning activities through: Evangelistic outreaches Open-air crusades Revival gatherings Community missions Rural evangelism The goal is simple: To reach people where they are and introduce them to the saving power of Jesus Christ. We believe no territory is too dark for the light of the gospel.",
    image: "/images/media/experts.png",
  },
];

export const mediaItemSlug = (item: Pick<MediaItem, "id" | "title">) => {
  const titleSlug = item.title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `${titleSlug}-${item.id}`;
};
