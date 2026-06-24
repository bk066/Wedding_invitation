export interface TimelineEvent {
  id: string;
  date: string;
  day: string;
  title: string;
  time: string;
  emoji: string;
  description: string;
}

export interface FamilySide {
  sideTitle: string;
  members: string[];
  location: string;
}
