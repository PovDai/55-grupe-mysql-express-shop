import { NODE_ENV } from "../../env.js";

    export function loginForm() {
    let email = '';
    let password = '';

    if (NODE_ENV === 'dev') {
        email = 'Labukas';
        password = 'labukaslabukaslabukas';
    }
    return `
        <div class="container">
            <div class="row">
                <form class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                    <div class="mb-4">
                        <label for="username_or_email" class="form-label color-danger"">Username or email</label>
                        <input id="username_or_email" value="${email}" type="text" class="form-control fs-5" required>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="form-label color-danger">Password</label>
                        <input id="password" value="${password}" type="password" class="form-control fs-5" required>
                    </div>
                    <div class="mb-4">
                        <input class="form-check-input me-2 mt-0" style="width: 1.5rem; height: 1.5rem;" type="checkbox" value="agree" id="tos required">
                        <label style="line-height: 1.5rem;" for="tos" class="color-danger">Agree to our Terms of Service</label>
                    </div>
                    <div class="mb-4">
                        <button type="submit" class="btn btn-primary w-100 py-2 fs-5 color-danger-button">Login</button>
                    </div>
                </form>
            </div>
        </div>
        `;
}