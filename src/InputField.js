export default function InputField({ type, onChange, placeholder, name, id }) {
  return (
    <div className="form-input">
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={id}
      />
    </div>
  );
}
