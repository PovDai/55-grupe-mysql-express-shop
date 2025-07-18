import { AdminTemplate } from "../../../templates/AdminPageTemplate.js";

export class PageNewCategories extends AdminTemplate{
   constructor(req) {
        super(req)
    }

    main() {
        return `<h1>Sveiki gyvi atvyki i Admin NEW Categories</h1>`
    }

}