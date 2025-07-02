'use client'
import {BiUpvote, BiDownvote} from "react-icons/bi";
import { upvote,downvote } from "@/app/lib/actions";

export default function VoteButton({ slug, sideA_votes, sideB_votes }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <button
        className="flex items-center gap-1 text-sm text-foreground hover:text-green-700 cursor-pointer"
        onClick={() => upvote(slug)}
      >
        <BiUpvote /> {sideA_votes}
      </button>
      <button
        className="flex items-center gap-1 text-sm text-secondary hover:text-red-700 cursor-pointer"
        onClick={() => downvote(slug)}
      >
        <BiDownvote /> {sideB_votes}
      </button>
    </div>
  );
    
}
