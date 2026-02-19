import { Avatar } from "@/components/Avatar";
import { CommentArea, CommentForm, CommentList, CommentsSectionWrapper, CommentsWrapper, StyledCommentsSection, SubmitCommentButton, ViewMoreButton } from "./styles";
import { FormField } from "@/components/FormField";
import { Comment } from "./Comment";
import { ChangeEvent, SubmitEvent, useState } from "react";
import { ArrowDownIcon } from "@phosphor-icons/react";

export function CommentSection() {
  const [newCommentContent, setNewCommentContent] = useState("")

  const isNewCommentContentEmpty = newCommentContent.length < 1

  function handleChangeCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")

    setNewCommentContent(event.target.value)
  }

  function handleCreateNewComment(event: SubmitEvent) {
    event.preventDefault()

    setNewCommentContent("")
  }

  function handleViewMoreComments() {

  }

  return (
    <StyledCommentsSection>
      <CommentsSectionWrapper>
        <CommentArea>
          <Avatar username="Felipe Elias" url="https://github.com/feponiel.png" hasBorder={false} />

          <CommentForm onSubmit={ (e) => handleCreateNewComment(e) }>
            <FormField
                type="textarea"
                placeholder="Write something cool..."
                name="newCommentContent"
                realtimeValue={ newCommentContent }
                onChange={ handleChangeCommentText }
                required
              />

              <SubmitCommentButton type="submit" disabled={ isNewCommentContentEmpty }>Submit</SubmitCommentButton>
          </CommentForm>
        </CommentArea>

        <CommentList>
          <CommentsWrapper>
            <Comment
              id="1"
              author={ { id: "1", name: "Paulo Archanjo", email: "paulo@archanjo.com", synthesis: "Data Analyst", created_at: new Date(), avatar_url: "https://github.com/pauloarchanjo.png", updated_at: new Date(), banner_url: "https://github.com/diego3g.png"  } }
              content="Not really."
              createdAt={new Date()}
              updatedAt={new Date()}
              likesAmount={12}
            />

            <Comment
              id="1"
              author={ { id: "2", name: "João Victor", email: "jao@vitoriano", synthesis: "Linux Specialist", created_at: new Date(), avatar_url: "https://github.com/jhonnzz.png", updated_at: new Date(), banner_url: "https://github.com/diego3g.png"  } }
              content="Not really."
              createdAt={new Date()}
              updatedAt={new Date()}
              likesAmount={12}
            />
          </CommentsWrapper>

          <footer>
            <ViewMoreButton onClick={ handleViewMoreComments }>
              <ArrowDownIcon weight="bold" />
              View more comments
            </ViewMoreButton>
          </footer>
        </CommentList>
      </CommentsSectionWrapper>
    </StyledCommentsSection>
  )
}