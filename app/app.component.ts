import {Component, ViewChild } from '@angular/core';
import {ScriptService} from './script_service';
import {SlackerDocument} from './slacker_document';

@Component({
  selector: 'my-app',
  templateUrl: 'views/app.html',
  providers: [ScriptService]
})
export class AppComponent {
    public currentDocument = new SlackerDocument();

    private hooks = new Array<SlackerDocument>(); 
    private editor : AceAjax.Editor;

    constructor(private scriptService : ScriptService){
       this.scriptService.getList()
            .then(names => {
                this.hooks = names.map(x => {
                    return new SlackerDocument(x);
                });
            });
    }

    ngOnInit() {
        this.editor = ace.edit("editor");
        this.editor.setTheme("ace/theme/xcode");
        this.editor.getSession().setMode("ace/mode/javascript");
    }

    showInputDialog() {
        eval("showMetroDialog('#dialog')");
    }
    addHook(name : string) {
        this.scriptService.create(name)
            .then(item => {
                this.hooks.push(new SlackerDocument(item));
            });
    }

    changeDocument(name : string) {
        this.currentDocument = this.hooks.find(x => x.name == name);
        this.editor.setValue(this.currentDocument.src);
    }
    updateDocument() {
        this.currentDocument.src = this.editor.getValue(); 

        this.scriptService.update(this.currentDocument);
    }
}