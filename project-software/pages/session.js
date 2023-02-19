//second page, where info from the hardware is read in
//general swathes of pain area lit up on screen
// page to be displayed on dentist/ provider's screen during dentist session

import Timer from "../components/Timer";
import { useRouter } from "next/router";

import ImageDrop from '../components/ImageDrop'

import { useQuery } from "../convex/_generated/react";
import { useMutation } from "../convex/_generated/react";
import { Id } from "@/convex/_generated/dataModel";

export default function session() {
  const createSession = useMutation("createSession");
  const createUser = (data) => createSession(data);

  const router = useRouter();

  const handleEndSessionClick = (e) => {
    e.preventDefault();

    const tempUser = {
      name: "Test",
      sessionTime: 60,
    // userId: new Id("users", ...)
      averagePain: 4,
    };

    const id = createUser(tempUser);

    router.push("./sessionSummary");
  };

  return (
    <div>
      <h2> Patient Updates </h2>
      <Timer />
      <ImageDrop />
      <button className="endSession" onClick={handleEndSessionClick}>
        {" "}
        End Session{" "}
      </button>
    </div>
  );
}
