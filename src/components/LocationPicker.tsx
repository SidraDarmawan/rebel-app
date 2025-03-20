"use client";

import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Check, MapPin } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { cn } from "@/lib/utils";

const locations = [
  {
    value: "all",
    label: "All Location",
  },
  {
    value: "jakarta",
    label: "Jakarta",
  },
  {
    value: "bandung",
    label: "Bandung",
  },
  {
    value: "denpasar",
    label: "Denpasar",
  },
  {
    value: "yogyakarta",
    label: "Yogyakarta",
  },
  {
    value: "medan",
    label: "Medan",
  },
  {
    value: "semarang",
    label: "Semarang",
  },
];

interface LocationPickerProps {
  onChange: (location: string) => void;
}

export function LocationPicker({ onChange }: LocationPickerProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>("all");

  const handleSelect = (currentValue: string) => {
    setValue(currentValue);
    setOpen(false);
    onChange(currentValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="mx-auto w-fit gap-2 rounded-none p-0 hover:bg-inherit"
        >
          <MapPin className="h-4 w-4 shrink-0 opacity-50" />
          {value === "all"
            ? "All Location"
            : locations.find((location) => location.value === value)?.label}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        {open && (
          <Command>
            <CommandInput placeholder="Search location..." />
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {locations.map((location) => (
                  <CommandItem
                    key={location.value}
                    value={location.value}
                    onSelect={() => handleSelect(location.value)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === location.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {location.label}
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        )}
      </PopoverContent>
    </Popover>
  );
}
