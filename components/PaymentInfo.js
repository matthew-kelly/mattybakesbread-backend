import React from "react";
import { TextArea, Stack, Box } from "@sanity/ui";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";
import FormField from "part:@sanity/components/formfields/default";

export const PaymentInfo = React.forwardRef((props, ref) => {
  const {
    type, // Schema information
    value, // Current field value
    onChange, // Method to handle patch events
  } = props;

  function formatJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return str;
    }
    return JSON.stringify(JSON.parse(str), null, 2);
  }

  const handleChange = React.useCallback(
    // useCallback will help with performance
    (event) => {
      const inputValue = formatJson(event.currentTarget.value); // get current value
      // if the value exists, set the data, if not, unset the data
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
    },
    [onChange]
  );

  return (
    <Stack space={2}>
      <Box>
        <pre>{formatJson(value)}</pre>
      </Box>
      <Box>
        <FormField label={type.title}>
          <TextArea
            type="text"
            value={value || ""}
            ref={ref}
            rows="10"
            onChange={handleChange}
          />
        </FormField>
      </Box>
    </Stack>
  );
});

export default PaymentInfo;
