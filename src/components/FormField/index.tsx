import { LockIcon, WarningCircleIcon } from "@phosphor-icons/react"
import { StyledFormField, TooltipContent, ValidationErrorMessage } from "./styles"
import * as Tooltip from "@radix-ui/react-tooltip"
import { ChangeEvent, InvalidEvent } from "react"

interface FormFieldProps {
  name: string
  type?: "input" | "textarea"
  placeholder?: string
  label?: string
  isDisabled?: boolean
  disabledMessage?: string
  hasValidationError?: boolean
  validationErrorMessage?: string
  defaultValue?: string
  realtimeValue?: string
  onChange?: (event: ChangeEvent<any, Element>) => void
  required?: boolean
}

export function FormField({
  name,
  type = "input",
  placeholder,
  label,
  isDisabled = false,
  disabledMessage="You can't fill in this field",
  hasValidationError = false,
  validationErrorMessage="This field is incorrect",
  defaultValue,
  realtimeValue,
  onChange,
  required
}: FormFieldProps) {
  return (
    <StyledFormField>
      {label && (
        <span>
          { label }
          { isDisabled && (
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <LockIcon />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <TooltipContent sideOffset={5}>
                    { disabledMessage }
                    <Tooltip.Arrow  className="TooltipArrow" />
                  </TooltipContent>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          ) }
        </span>
      )}
      { type == 'input' && <input type="text" name={name} placeholder={placeholder} defaultValue={defaultValue} value={realtimeValue} onChange={ onChange } required={ required } disabled={isDisabled} /> }
      { type == 'textarea' && <textarea name={name} placeholder={placeholder} defaultValue={defaultValue} value={realtimeValue} onChange={ onChange } required={ required } disabled={isDisabled} /> }

      { hasValidationError && (
        <ValidationErrorMessage>
          <WarningCircleIcon size={16} />
          { validationErrorMessage }
        </ValidationErrorMessage>
      ) }
    </StyledFormField>
  )
}
