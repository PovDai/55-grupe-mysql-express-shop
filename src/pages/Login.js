import { PageTemplate } from "../templates/PageTemplate.js";
import { loginForm } from "../ui/forms/loginForm.js";

export class PageLogin extends PageTemplate{
    constructor(req) {
        super(req)
        this.pageJS='login'
    }
    main() {
        return `
        <main>
        ${loginForm()}
        </main>
    `}
    
}