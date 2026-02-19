import { SearchResultTagLink, StyledSearchResultTag } from "./styles";

interface SearchResultTagProps {
  name: string
  posts_amount: number
  filter_url: string
}

export function SearchResultTag({ name, posts_amount, filter_url }: SearchResultTagProps) {
  return (
    <StyledSearchResultTag>
      <SearchResultTagLink href={ filter_url }>
        <strong>#{ name }</strong>
        <span>{ posts_amount } posts related</span>
      </SearchResultTagLink>
    </StyledSearchResultTag>
  )
}
