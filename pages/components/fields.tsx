import React, { ChangeEvent, useState } from "react";

export function TextField({ label, name, value: initialValue = "", onChange: onChangeCallback }: { label: string; name: string; value?: string; onChange?: (value: string) => void }) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        onChangeCallback?.(newValue);
    };

    return (
        <div className="field">
            <label className="text-sm pb-2 block">{label}</label>
            <textarea name={name} id={name} className="block w-full bg-blue-new rounded-md border-0 text-white-800 px-2.5 py-2 shadow-sm ring-1 ring-inset ring-blue-border placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus-visible:outline-none sm:text-sm sm:leading-6" required onChange={handleChange} value={value} />
        </div>
    );
}

interface SelectProps {
    label: string;
    name: string;
    options: { value: string; label: string }[];
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ label, name, options, value, onChange }: SelectProps) => {
    return (
        <div>
            <label className="text-sm pb-2 block">{label}</label>
            <select className="block w-full bg-blue-new rounded-md border-0 text-white-800 px-2.5 py-2 shadow-sm ring-1 ring-inset ring-blue-border placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus-visible:outline-none sm:text-sm sm:leading-6" name={name} value={value} onChange={onChange} required>
                <option value="" disabled>
                    Selecteer een optie
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
