class QrImage  extends HTMLElement {
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({mode : 'closed'})
    }

    connectedCallback(){
        this.mapComponentAttributes()
        this.render()
        this.initComponent()
    }

    mapComponentAttributes(){
        const attributesMapping = [
            'src'
        ]
        attributesMapping.forEach(key => {
            if (!this.attributes[key]){
                this.attributes[key] = {value : ''}
            }
        })
    }

    render(){
        this.shadowDOM.innerHTML = `
        ${this.templateCss()}
        ${this.template()}
        `
    }


    template() {
        return `
            <img src="${this.attributes.src.value}" class="tag" />
                
            
        `;
    }
 
    templateCss() {
        return `
            <style>
             [...]
             [...]
            </style>
        `;
    }
    initComponent() {
        this.$tag = this.shadowDOM.querySelector('.tag');
    }
    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('qr-image',QrImage )

