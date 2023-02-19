import { jsonToConvex } from "convex/values";
import { useQuery } from "../convex/_generated/react";
import { useMutation } from "../convex/_generated/react";

export default function endsummary() {
  const data = useQuery("getSessions");

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <h2>Session Summary</h2>
      <p>Duration: </p>
      <p>Instances of pain: </p>
      <p>Average pain rating: </p>
    </div>
  );
}
