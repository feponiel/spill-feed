import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { SearchFieldButton, SearchFieldInput, SearchFieldWrapper, StyledSearchField } from "./styles";
import { ChangeEvent, useState } from "react";
import { SearchResult } from "./SearchResult";
import * as Collapsible from "@radix-ui/react-collapsible"

export function SearchField() {
  const [isSearchResultOpen, setSearchResultOpen] = useState(false)

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value

    if (value.length > 0) {
      setSearchResultOpen(true)
    } else {
      setSearchResultOpen(false)
    }
  }

  return (
    <StyledSearchField>
      <SearchFieldWrapper>
        <SearchFieldInput onChange={ (event) => handleSearch(event) } />
        <SearchFieldButton>
          <MagnifyingGlassIcon />
        </SearchFieldButton>
      </SearchFieldWrapper>
      
      <Collapsible.Root open={ isSearchResultOpen }>
        <SearchResult />
      </Collapsible.Root>
    </StyledSearchField>
  )
}
