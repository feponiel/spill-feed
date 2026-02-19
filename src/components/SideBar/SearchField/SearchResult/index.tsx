import * as RadioGroup from "@radix-ui/react-radio-group"
import { NoResultsMessage, SearchResultContainer, SearchResultHeader, SearchResultList, SearchResultsWrapper, StyledSearchResult, ViewMoreButton } from "./styles"
import { ArrowDownIcon } from "@phosphor-icons/react"

export function SearchResult() {
  function handleViewMoreResults() {}
  
  return (
    <StyledSearchResult>
      <SearchResultContainer>
        <RadioGroup.Root defaultValue="users">
          <SearchResultHeader>
            <RadioGroup.Item value="users" asChild>
              <button>Users</button>
            </RadioGroup.Item>

            <RadioGroup.Item value="topics" asChild>
              <button>Topics</button>
            </RadioGroup.Item>
          </SearchResultHeader>
        </RadioGroup.Root>

        <SearchResultList>
          <SearchResultsWrapper></SearchResultsWrapper>

          <NoResultsMessage>No results found :(</NoResultsMessage>

          <footer>
            <ViewMoreButton onClick={ handleViewMoreResults }>
              <ArrowDownIcon weight="bold" />
              View more results
            </ViewMoreButton>
          </footer>
        </SearchResultList>
      </SearchResultContainer>
    </StyledSearchResult>
  )
}