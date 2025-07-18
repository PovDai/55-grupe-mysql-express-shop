import { AdminTemplate } from "../../../templates/AdminPageTemplate.js";

export class PageCategories extends AdminTemplate {
    constructor(req) {
        super(req)
    }

    main() {
        return `<h1>Sveiki gyvi atvyki i Admin page Categories</h1>`
    }

}