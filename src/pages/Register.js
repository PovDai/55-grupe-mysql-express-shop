import { PageTemplate } from "../templates/PageTemplate.js";
import {registerForm} from "../ui/forms/registerForm.js"

export class PageRegister extends PageTemplate{
    main() {
        return `
            <main>
               ${registerForm()}
            </main>`;
    }
    
}