import Link from "next/link";
import {BiUpvote, BiDownvote} from "react-icons/bi";
import { upvote,downvote } from "@/app/lib/actions";
import VoteButton from "../buttons/voteButton";

const DebateItem = ({ debate }) => {
  const {
    title,
    description,
    sideA_title,
    sideB_title,
    sideA_votes,
    sideB_votes,
    creator,
  } = debate;

  const total = sideA_votes + sideB_votes;
  const sideA_percentage = Math.floor((sideA_votes / total) * 100) ;
  const sideB_percentage =Math.floor((sideB_votes / total) * 100) ;

  return (
    <div className="w-full max-w-xl mx-auto shadow-lg rounded-2xl p-4 bg-primary text-foreground">
      <Link href={`/debates/${debate.slug}`} className="block mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl text-foreground font-semibold">{title}</h2>
          <div className="text-sm text-foreground/50">
            By <span className="font-medium">{creator}</span> ·{" "}
          </div>
        </div>

        <p className="text-foreground/70 mb-4">{description}</p>

        <div className="space-y-1 mb-2">
          <div className="flex justify-between text-sm font-medium text-foreground">
            <span>{sideA_title}</span>
            <span>{sideA_percentage}%</span>
          </div>
          <div className="w-full bg-foreground h-3 rounded-full overflow-hidden">
            <div
              className="bg-background h-full"
              style={{ width: `${sideA_percentage}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-sm font-medium text-foreground mt-2">
            <span>{sideB_title}</span>
            <span>{sideB_percentage}%</span>
          </div>
          <div className="w-full bg-foreground h-3 rounded-full overflow-hidden">
            <div
              className="bg-secondary h-full"
              style={{ width: `${sideB_percentage}%` }}
            ></div>
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-4 mb-4">
          <VoteButton slug={debate.slug} sideA_votes={sideA_votes} sideB_votes={sideB_votes}/>
        </div>
    </div>
  );
};

export default DebateItem;
