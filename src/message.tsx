function Message () {
    const name = 'Pranav';
    if (name)
        return <h1>Hello {name}</h1>;
    return <div>Hello World</div>
}

export default Message;