import React from 'react';
import {Input as FormInput} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

const Input = ({ label, ...props }:{
  label: string,
  props: any
}) => (
  <div>
    <Label className="block text-sm font-medium text-gray-700">{label}</Label>
    <FormInput {...props} className="mt-1 block w-full border border-gray-300 rounded-md shadow-xs py-2 px-3 focus:outline-hidden focus:ring-blue-500 focus:border-blue-500" />
  </div>
);

export default Input;
