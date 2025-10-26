import React from "react";
import { Input } from "../../../components/ui/input";

type FeatureCardProps = {
  icon: React.ElementType; // 👈 the icon component (e.g. MapPin, Users, etc.)
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
};

export function SearchBar({
  icon: Icon,
  label,
  type,
  placeholder,
}: FeatureCardProps) {
  return (
    <div className="flex items-center gap-2 border-r pr-4">
      <Icon className="w-5 h-5 text-gray-400" />
      <div className="flex-1">
        <label className="text-xs text-gray-600 block mb-1">{label}</label>
        <Input
          type={type}
          placeholder={placeholder}
          className="border-0 p-0 h-auto focus-visible:ring-0"
        />
      </div>
    </div>
  );
}
