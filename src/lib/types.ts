type JobPost = {
    title: string;
    company: string;
    requirements: string[];
    salary: number;
}

type User = {
    username: string;
    password: string;
    type: "employee" | "company";
    first_name: string;
    last_name: string;
}

type CVBody = {
    username: string;
    file_content: string;
}

type AccessToken = {
    token: string,
    expires: number
}

type ErrorMessage = {
    message: string;
}