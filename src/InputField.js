export default function InputField({ type, onChange, placeholder }) {
  return (
    <div className="form-input">
      <input type={type} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}
