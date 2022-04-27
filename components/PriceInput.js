import React from "react";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";
import { TextInput, Text, Stack } from "@sanity/ui";

function createPatchFrom(value) {
  return PatchEvent.from(value === "" ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
}).format;

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <Stack space={2}>
      <Text size={3} weight="bold">
        {type.title} - {value ? formatMoney(value / 100) : formatMoney(0)}
      </Text>
      <Text size={1} muted={true}>
        {type.description}
      </Text>
      <TextInput
        type="number"
        value={value}
        onChange={(e) => onChange(createPatchFrom(e.target.value))}
        ref={inputComponent}
      />
    </Stack>
  );
}

PriceInput.focus = function () {
  this._inputElement.focus();
};
