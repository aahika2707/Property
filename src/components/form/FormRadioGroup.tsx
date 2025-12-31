"use client";

import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";
import { Controller, Control, FieldValues } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface RadioOption {
  label: string;
  value: string;
}

interface FormRadioGroupProps<T extends FieldValues> {
  name: string;
  control: Control<T>;
  label?: string;
  options: RadioOption[];
  disabled?: boolean;
  className?: string;
  rules?: Record<string, any>;
  error?: string | null;
  orientation?: "vertical" | "horizontal";
}

function FormRadioGroup<T extends FieldValues>({
  name,
  control,
  label,
  options = [],
  disabled = false,
  className = "",
  rules = {},
  error = null,
  orientation = "vertical",
}: FormRadioGroupProps<T>) {
  return (
    <div className="grid w-full items-center gap-1.5">
      {label && <Label>{label}</Label>}

      <Controller
        name={name as never}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              disabled={disabled}
              className={cn(
                orientation === "horizontal"
                  ? "flex gap-4"
                  : "grid gap-2",
                className
              )}
            >
              {options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option.value}
                    id={`${name}-${option.value}`}
                    className={cn(
                      (error || fieldState.invalid) &&
                        "border-destructive text-destructive"
                    )}
                  />
                  <Label
                    htmlFor={`${name}-${option.value}`}
                    className="text-sm lg:text-base opacity-50"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {(error || fieldState.error) && (
              <p className="font-medium text-destructive text-xs mt-1">
                {error || fieldState.error?.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
}

export default FormRadioGroup;
