import { PageTemplate } from "../templates/PageTemplate.js";
import { loginForm } from "../ui/forms/loginForm.js";

export class PageLogin extends PageTemplate{
    main() {
        return `
        <main>
        ${loginForm()}
        </main>
    `}
    
}