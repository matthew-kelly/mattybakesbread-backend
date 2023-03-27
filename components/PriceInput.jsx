import React, { useCallback } from "react";
import { TextInput, Text, Stack } from "@sanity/ui";
import { set, unset } from "sanity";

const formatMoney = Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
}).format;

export default function PriceInput({ value, onChange, elementProps }) {
  const handleChange = useCallback(
    (e) =>
      onChange(
        e.currentTarget.value ? set(parseInt(e.currentTarget.value)) : unset()
      ),
    [onChange]
  );
  return (
    <Stack space={2}>
      <Text size={3} weight="bold">
        {value ? formatMoney(value / 100) : formatMoney(0)}
      </Text>
      <TextInput
        {...elementProps}
        type="number"
        value={value}
        onChange={handleChange}
      />
    </Stack>
  );
}

PriceInput.focus = function () {
  this._inputElement.focus();
};
