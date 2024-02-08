export default function Contact() {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Contact Me</h1>
      <section>
        <div name="contact" className="d-flex justify-content-center align-items-center p-4">
          <form action="https://getform.io/f/6d4c1ac2-87d7-446a-8abe-8fbf3e01b675" method="POST" className="max-w-600px w-100">
            <div className="pb-4">
              <p>To get in touch with me, fill out the form or <a href="mailto:allex.ortiz@outlook.com" >email me</a>
              </p>
            </div>
            <input className="form-control mb-4" type="text" placeholder="Name" name="name" required />
            <div className="invalid-feedback">Name is required.</div>
            <input className="form-control mb-4" type="email" placeholder="Email" name="email" required />
            <div className="invalid-feedback">Please enter a valid email address.</div>
            <textarea className="form-control mb-4" name="message" rows="5" placeholder="Message" required></textarea>
            <div className="invalid-feedback">Message is required.</div>
            <button className="btn btn-primary btn-lg btn-block">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};5