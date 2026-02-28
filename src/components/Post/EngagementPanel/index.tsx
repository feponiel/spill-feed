import { PostActions } from "../PostActions";
import { EngagementPanelDisplay, Separator, StyledEngagementPanel } from "./styles";

interface EngagementPanelProps {
  isPostLiked: boolean
  likesAmount: number
  commentsAmount: number
  onLikePost: () => void
}

export function EngagementPanel({ isPostLiked, likesAmount, commentsAmount, onLikePost }: EngagementPanelProps) {
  return (
    <StyledEngagementPanel>
      <PostActions onLikePost={ onLikePost } isPostLiked={ isPostLiked } />

      <EngagementPanelDisplay>
        <span>
          <strong>{ likesAmount }</strong>
          Likes
        </span>

        <Separator>•</Separator>

        <span>
          <strong>{ commentsAmount }</strong>
          Comments
        </span>
      </EngagementPanelDisplay>
    </StyledEngagementPanel>
  )
}