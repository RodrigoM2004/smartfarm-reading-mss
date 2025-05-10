export default function StyledInput({ type, placeholder, value, onChange, name }) {
    return (
        <input
        name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-b-blue-900 p-2 border-t-transparent border-x-transparent focus:border-b-blue-900 focus:outline-none placeholder:text-blue-950 text-bold  transition-all duration-200 ease-in-out w-full h-12 placeholder:text-sm"
        />
    );
}