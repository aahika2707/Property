'use client'

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

interface FormValueCheckboxProps<T extends FieldValues> {
  name: Path<T>; // ✅ FIX HERE
  control: Control<T>;
  value: string | number | boolean;
  label?: string;
  labelclassName?: string;
  className?: string;
  error?: string | null;
}

function FormValueCheckbox<T extends FieldValues>({
  name,
  control,
  value,
  label,
  className = "",
  labelclassName = "",
  error = null,
}: FormValueCheckboxProps<T>) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          const isChecked = Array.isArray(field.value)
            ? field.value.includes(value)
            : field.value === value;

          const handleChange = (checked: boolean) => {
            if (Array.isArray(field.value)) {
              const newValue = checked
                ? [...field.value, value]
                : field.value.filter((v) => v !== value);
              field.onChange(newValue);
            } else {
              field.onChange(checked ? value : null);
            }
          };

          return (
            <>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`${name}-${value}`}
                  checked={isChecked}
                  onCheckedChange={handleChange}
                  className={cn(
                    className,
                    (error || fieldState.invalid) && "border-destructive"
                  )}
                />
                {label && (
                  <Label
                    htmlFor={`${name}-${value}`}
                    className={cn("cursor-pointer", labelclassName)}
                  >
                    {label}
                  </Label>
                )}
              </div>

              {(error || fieldState.error) && (
                <p className="text-xs text-orange-500 mt-1 ml-6">
                  {error || fieldState.error?.message}
                </p>
              )}
            </>
          );
        }}
      />
    </div>
  );
}

export default FormValueCheckbox;
