import { footerData } from "../data/footerData.js";
export class PageTemplate {

    constructor(req) {
        this.req = req;
        this.pageJS = '';
    }
    head() {
        return `
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Express example</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Coming soon" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="stylesheet" href="/css/bootstrap.min.css">
                <link rel="stylesheet" href="/css/styles.css">
            </head>`;
    }
    header() {
        
        return `  <div class="container"> 
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
             <div class="col-md-3 mb-2 mb-md-0"> <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none"> <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
             </a> </div> 
             <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"> 
                <li><a href="/" class="nav-link px-2 color-danger">Home</a></li> 
                <li><a href="/shop" class="nav-link px-2 color-danger">Shop</a></li> 
                <li><a href="/list" class="nav-link px-2 color-danger">List</a></li> 
                <li><a href="/something" class="nav-link px-2 color-danger">Something</a></li>
                <li><a href="/error" class="nav-link px-2 color-danger">404</a></li> 
            </ul> 
            <div class="col-md-3 text-end"> 
               <a href="/login"> <button type="button" class="btn btn-outline-warning me-2 color-danger-button-one ">Login</button> </a> 
                <a href="/register"><button type="button" class="btn btn-primary color-danger-button">Register</button> </a>
            </div> 
        </header>
     </div>`
    }

    main() {
        return `
        <div>This is page home </div>
        `
    }
     footer() {
            let HTML = '';
    
            for (const link of footerData) {
                HTML += `
                    <li class="nav-item">
                        <a href="${link.href}" class="nav-link px-2 color-danger">${link.text}</a>
                    </li>`;
            }
            return `
                <div class="container">
                    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
                        <p class="col-md-4 mb-0 color-danger">&copy; 2025 Povilas</p>
                        <ul class="nav col-md-8 justify-content-end ">${HTML}</ul>
                    </footer>
                </div>`;
        }

 
    script() {
        if (!this.pageJS) {
            return '';
        }

        return `<script src="/js/${this.pageJS}.js" type="module"></script>`;
    }

    render(){
        return `<!DOCTYPE html>
        <html lang="en">
        ${this.head()}

        <body>
        ${this.header()}
        ${this.main()}
        ${this.footer()}
        ${this.script()}
        </body>
        </html>`
    }
}