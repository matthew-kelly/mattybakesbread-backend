import React, { useCallback } from "react";
import { TextArea, Stack, Box } from "@sanity/ui";
import { set, unset } from "sanity";

export const PaymentInfo = (props) => {
  const {
    value = "", // Current field value
    onChange, // Method to handle patch events
    elementProps,
  } = props;

  function formatJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return str;
    }
    return JSON.stringify(JSON.parse(str), null, 2);
  }

  const handleChange = useCallback(
    // useCallback will help with performance
    (event) => {
      const inputValue = formatJson(event.currentTarget.value); // get current value
      // if the value exists, set the data, if not, unset the data
      return onChange(inputValue ? set(inputValue) : unset());
    },
    [onChange]
  );

  return (
    <Stack space={2}>
      <Box>
        <pre>{formatJson(value)}</pre>
      </Box>
      <Box>
        <TextArea
          {...elementProps}
          type="text"
          value={value || ""}
          rows="10"
          onChange={handleChange}
        />
      </Box>
    </Stack>
  );
};

export default PaymentInfo;
