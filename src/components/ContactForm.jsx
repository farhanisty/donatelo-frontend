import InputForm from "./InputForm.jsx";

export default function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputForm type="text" name="name" placeholder="Name" />
      <InputForm type="email" name="email" placeholder="Email" />
      <InputForm
        type="text"
        name="contact-number"
        placeholder="Contact Number"
      />
      <InputForm type="text" name="country" placeholder="Country" />

      <textarea
        className="w-[500px] max-w-full px-3 py-1 bg-transparent border border-black resize-none mt-7 h-[100px]"
        name="message"
        placeholder="Please type your message here"
      ></textarea>

      <div>
        <button className="inline-block mt-5 py-5 px-10 border-black hover:text-white hover:border-primary hover:bg-primary rounded-full border">
          Submit
        </button>
      </div>
    </form>
  );
}
