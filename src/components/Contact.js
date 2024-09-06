import React from "react";

const ContactBlock = ({ iconSrc, title, description }) => {
  return (
    <div className="bg-white text-center shadow-md rounded-lg p-6 w-60">
      <div className="mb-4">
        <img className="w-12 h-auto mx-auto" src={iconSrc} alt={`${title} Icon`} />
      </div>
      <h3 className="text-orange-400 text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}</p>
    </div>
  );
};

const ContactForm = () => {
  return (
    <section className="contact-form-section text-center mt-10 p-6">
      <h2 className="text-2xl text-gray-800 mb-4">Write to us</h2>
      <div className="h-1 w-12 bg-orange-400 mx-auto mb-6"></div>
      <form className="max-w-3xl mx-auto flex flex-wrap gap-6 justify-center">
        <div className="form-group flex flex-col w-1/2">
          <input className="p-3 border border-gray-300 rounded mb-3" type="text" placeholder="Name *" required />
          <input className="p-3 border border-gray-300 rounded mb-3" type="text" placeholder="Company Name *" required />
          <input className="p-3 border border-gray-300 rounded mb-3" type="number" placeholder="Mobile No. *" required />
        </div>
        <div className="form-group flex flex-col w-1/2">
          <input className="p-3 border border-gray-300 rounded mb-3" type="email" placeholder="Email *" required />
          <textarea className="p-3 border border-gray-300 rounded mb-3" placeholder="Comments" rows="4"></textarea>
        </div>

        <div className="form-buttons w-full flex justify-center gap-4 mt-6">
          <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded hover:opacity-80">
            Submit
          </button>
          <button type="reset" className="bg-gray-700 text-white px-6 py-2 rounded hover:opacity-80">
            Clear
          </button>
        </div>
      </form>
    </section>
  );
};

const Map = () => {
  return (
    <div className="map-container my-10">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.9820368369524!2d77.11494447550508!3d28.749953275600785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1725523855630!5m2!1sen!2sin"
        className="w-full h-80 border border-gray-200 rounded shadow-lg"
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section className="contact-section bg-gray-100 p-10">
      <div className="heading bg-blue-700 h-44 flex items-center justify-center text-white mb-12">
        <h2 className="text-3xl">Reach Us</h2>
      </div>

      <div className="contact-container flex flex-wrap justify-center gap-10">
        <ContactBlock
          iconSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX//////wH//wD//yj//w///yT//xz///P///f//9T///3///D///n//87//5z///v//+v//zn//8T//6b//+b//8r//3H//2D//63//+P//93//0r//5f//43//1D//3j//7f//6z//77//4X//2j//37//4r//2H//0P//9j//1cT94iWAAAMjElEQVR4nO1d6ZKiMBBewqF4MAKKtyIeo77/A24SroSkAR2VWJXvx27VGCQfafpKd/z3T0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDg0fPjb1jNJ//RkcvdntdT+fFcL25hXhY88140PW8XoNR/JtyMlikf7ofhl1P788I5gI5nuY6/uaV/PEsmF5J8jjpeqJPYrBtoleQjL6SY9iOX8bx3O96vo/CNVvzyzguup7yYzg+xC/luP4ivTq1HyZIOSZdT7wtkmf4UYrHrqfeDpsnCRKOu64n3wbR8wQxRXPU9fwbcfoDP0LRVt1s/JEgWcWfrjnU4vxXgpii3zWJOoR/J4gp/nZNA8b4L0qGoeh1TQRC7zUEsV10u6YC4PoagoRi11TkaH4JixRG48B912RkmLSIdZFh+qbRTFJNOb3XTRpTMi/JNDV1g2lyMetJIrNjNhLMamaM2VyWlfHLSy1HFHdBohYmOF3MRK7+vRqO6imbpGauEeRqjmq8dOVifnAJEQpqLgvgTKP9sbm3wgyeaH1uYmiDV84+NPd2gBQp8pvyvQMfunT+kZm3xBAQNmS2SGgDAo6QSrs3HjTJNuFsH3o84dvn3R7yZUDo1urqlZwiWr951g9gCizCpjrusN9d15FXJb4BHpA6ORu5z13V94lfbh5WBBCQAXXyp1JNinh1P7kysog5jtkP5S6fQulT+fy4fEs1/K94ctLQUh33e9UsY+IiIe4tlTp96ryIsXx6zIipZJX5bQq5GKgSJV6kszszI6SahDPpYhoSKbTjNpfOn3G4F4A1icohgmOLDEsdVeNLZZBxZxzI5Sm98lFVE1mmbVr3DtjIgCyRIqsHx2D4wOhTXpCRYVrIdhRRpgNs3QxByE7lgC3IkPHL+A0PZNnIdBzr82xk6CEJRfYV2sHRcTmIVVfkCzE/ZCM1am0myBApsgIoLHA5qqwyYcITZDmO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" // Add appropriate icon src
          title="ADDRESS"
          description={`Delhi Technological University\nP4X9+X2J, Bawana Rd, Shahbad Daulatpur Village,\nRohini, New Delhi, Delhi, 110042`}
        />

        <ContactBlock
          iconSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMidP-bHkaOkOoRNZtJiUrM5BgUwbOGK-cCsYgbX-VGyE7O3A"
          title="FOR NEW SUBSCRIPTIONS"
          description={`📞 +91 xxxxxxxxxx\n✉️ dtu@ac.in`}
        />

        <ContactBlock
          iconSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKbTz8PoJyrZUP2byn09J2Wi42_JI67wRu8W-k9TQ_AwXv735"
          title="HELP DESK (FOR SUBSCRIBERS)"
          description={`(Monday through Friday 9 am to 6 pm)\n📞 +91-xx-xxxxxxx\n✉️ help@projectstoday.com`}
        />
      </div>

      <ContactForm />
      <Map />
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <ContactSection />
    </div>
  );
};

export default App;
