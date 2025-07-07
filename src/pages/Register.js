import { PageTemplate } from "../templates/PageTemplate.js";
import {registerForm} from "../ui/forms/registerForm.js"

export class PageRegister extends PageTemplate{
    constructor(req) {
        super(req)
        this.pageJs='login'
    }
    main() {
        return `
            <main>
               ${registerForm()}
            </main>`;
    }
    
}