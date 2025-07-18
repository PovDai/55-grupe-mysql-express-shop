import {PageError} from '../pages/public/Error.js'

export function isAdmin(req, res, next) {
    if (!req.user.isLoggedIn) {
        return res.send(new PageError().render());
    }

    return next();
}