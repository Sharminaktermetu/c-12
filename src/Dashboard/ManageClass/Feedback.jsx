

const Feedback = () => {
    return (
        <div className="flex flex-col w-9/12 mx-auto p-12">
            <textarea className="textarea textarea-secondary" placeholder="Send Feedback"></textarea>
            <button className="btn btn-primary mt-8">Send</button>
        </div>
    );
};

export default Feedback;