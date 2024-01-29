import InputField from "./InputField";

export default function Contact() {
  return (
    <div className="page contact" id="Contact">
      <h2>Contact</h2>
      <p>
        Feel free to get in touch or schedule childcare services using the
        contact form below. Whether you have inquiries, wish to discuss specific
        requirements, or are ready to book, I'm here to assist. Your child's
        well-being is my priority.
      </p>
      <form>
        <div className="form-top">
          <InputField label="Name" placeholder="Name?" type="text" />
          <InputField label="Email" placeholder="Email?" type="email" />
          <InputField label="Phone" placeholder="Phone Number?" />
        </div>
      </form>
    </div>
  );
}
