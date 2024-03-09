export function TextField({ label, name }: { label: string; name: string }) {
    return (
        <div className="field">
            <label className="text-sm pb-2 block">{label}</label>
            <textarea name={name} id={name} className="block w-full bg-blue-new rounded-md border-0 text-white-800 px-2.5 py-2 shadow-sm ring-1 ring-inset ring-blue-border placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus-visible:outline-none sm:text-sm sm:leading-6" required />
        </div>
    );
}
