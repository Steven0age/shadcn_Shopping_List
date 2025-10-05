import {
  Card,
  CardAction,
  CardDescription,
  CardTitle,
  CardHeader,
} from "../card";
import { Button } from "../button";

export default function SingleItem() {
  return (
    <Card className="mb-2">
      <CardHeader>
        <CardTitle className="text-lg">Kartoffel</CardTitle>
        <CardDescription> Anzahl: 1</CardDescription>
        <CardAction className="self-center">
          <Button className="w-35" variant="outline" size="lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Abhaken
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
