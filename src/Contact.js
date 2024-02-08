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
          <InputField placeholder="Name?" type="text" name="name" id="name" />
          <InputField
            placeholder="Email?"
            type="email"
            name="email"
            id="email"
          />
          <InputField placeholder="Phone Number?" name="number" id="number" />
        </div>
        <div className="form-middle">
          <textarea name="message" id="message"></textarea>
        </div>
        <div className="form-bottom">
          <InputField type="date" name="date" id="date" />
          <InputField type="time" name="time" id="time" />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
