import { PUBLIC_JWT_SECRET } from "$env/static/public";
import jwt from "jsonwebtoken";

export function token_validator(token: string) {
    try {
        if (!token) return;

        const decoded = jwt.verify(token, PUBLIC_JWT_SECRET) as Pick<User, "username" | "type">;
        const { username: user, type } = decoded;
        return { user, type };
    }
    catch {
        return;
    }
}