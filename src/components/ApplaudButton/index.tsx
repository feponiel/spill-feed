"use client"

import { HandsClappingIcon } from "@phosphor-icons/react";
import { StyledApplaudButton } from "./styles";
import { useState } from "react";

interface ApplaudButtonProps {
  currentAmount: number
  onApplaudEvent: () => void
}

export function ApplaudButton({ currentAmount, onApplaudEvent }: ApplaudButtonProps) {
  const [applaudAmount, setApplaudAmount] = useState(currentAmount)

  function handleApplaud() {
    setApplaudAmount(prev => prev + 1)
    onApplaudEvent()
  }

  return (
    <StyledApplaudButton onClick={ handleApplaud }>
      <HandsClappingIcon size={ 18 } />
      <span>
        Applaud

        <span aria-label={`${ applaudAmount } applauds`}>
          { applaudAmount }
        </span>
      </span>
    </StyledApplaudButton>
  )
}
