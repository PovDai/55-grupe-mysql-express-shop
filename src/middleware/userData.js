import { connection } from "../db.js";

export async function userData(req, res, next) {
    req.user = {
        isLoggedIn: false,
    };

    if (!req.cookies.loginToken || req.cookies.loginToken.length !== 20) {
        return next();
    }

    try {
        const sql = `
            SELECT shop.id, shop.username, shop.email,
                shop.created_at AS user_created_at,
                login_tokens.created_at AS login_token_created_at
            FROM login_tokens
            INNER JOIN shop
                ON login_tokens.user_id = shop.id
            WHERE token = ?;`;
        const [results] = await connection.execute(sql, [req.cookies.loginToken]);

        if (results.length !== 1) {
            return next();
        }

        req.user = {
            ...results[0],
            isLoggedIn: true,
        };
    } catch (error) {
        console.log(error);
    }

    return next();
}