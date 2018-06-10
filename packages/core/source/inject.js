class Injectable {
    constructor(pattern)
}

const inject = pattern => subject => {
    return new Injectable(pattern, subject);
};

export default inject;