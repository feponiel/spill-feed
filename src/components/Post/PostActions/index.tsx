import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { LikeButton, StyledPostActions } from "./styles";
import { ChatCircleIcon, HeartIcon } from "@phosphor-icons/react";

interface PostActionsProps {
  isPostLiked: boolean
  onLikePost: () => void
}

export function PostActions({ isPostLiked, onLikePost }: PostActionsProps) {
  return (
    <StyledPostActions>
      <LikeButton $isLiked={ isPostLiked } onClick={ onLikePost }>
        <HeartIcon weight={ isPostLiked ? "fill" : "regular" } />
        Like
      </LikeButton>
      
      <CollapsibleTrigger asChild>
        <button>
          <ChatCircleIcon />
          Comment
        </button>
      </CollapsibleTrigger>
    </StyledPostActions>
  )
}