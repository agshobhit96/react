const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>
                You can contact us at:
                <a href="mailto:abc@xyz.com"> mail_here </a>
            </p>
            <input type="text" placeholder="Query"></input>
            <button>Submit</button>
        </div>
    );
}

export default Contact;